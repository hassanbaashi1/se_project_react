import { useEffect, useState } from "react";
import { defaultClothingItems } from "../utils/clothingItems";
import { getWeather } from "../utils/weatherApi";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ItemModal from "./ItemModal/ItemModal";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <Header handleAddClick={handleAddClick} weatherData={weatherData} />

      <Main
        clothingItems={clothingItems}
        weatherData={weatherData}
        onCardClick={handleCardClick}
      />

      <Footer />

      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={handleCloseModal}
      >
        <label className="modal__label" htmlFor="name">
          Name
        </label>

        <input
          className="modal__input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />

        <label className="modal__label" htmlFor="imageUrl">
          Image
        </label>

        <input
          className="modal__input"
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          required
        />

        <p className="modal__legend">Select the weather type:</p>

        <div className="modal__radio-buttons">
          <label className="modal__radio-label" htmlFor="hot">
            <input type="radio" id="hot" name="weather" value="hot" required />
            Hot
          </label>

          <label className="modal__radio-label" htmlFor="warm">
            <input type="radio" id="warm" name="weather" value="warm" />
            Warm
          </label>

          <label className="modal__radio-label" htmlFor="cold">
            <input type="radio" id="cold" name="weather" value="cold" />
            Cold
          </label>
        </div>
      </ModalWithForm>

      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
