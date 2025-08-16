import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  coordinates,
  APIKey,
  defaultClothingItems,
} from "../../utils/constants";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import ItemCard from "../ItemCard/ItemCard";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { getItems, addItem, deleteItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [cardToDelete, setCardToDelete] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddClick = () => setActiveModal("add-garment");

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
    setCardToDelete(null);
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    setLoading(true);
    return addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prev) => [newItem, ...prev]);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const openConfirmationModal = (card) => setCardToDelete(card);

  const handleCardDelete = (card) => {
    setLoading(true);
    deleteItem(card._id)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== card._id)
        );
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getItems()
      .then(setClothingItems)
      .catch(console.error)
      .finally(() => setLoading(false));

    getWeather(coordinates, APIKey)
      .then((data) => setWeatherData(filterWeatherData(data)))
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItemModalSubmit={handleAddItemModalSubmit}
          isLoading={loading}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          onRequestDelete={openConfirmationModal}
        />

        <DeleteConfirmationModal
          card={cardToDelete}
          onCancel={() => setCardToDelete(null)}
          onConfirm={handleCardDelete}
          isLoading={loading}
        />

        <Footer />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
