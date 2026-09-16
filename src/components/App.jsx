import { useEffect, useState } from "react";
import { defaultClothingItems } from "../utils/clothingItems";
import { getWeather } from "../utils/weatherApi";
import Footer from "./Footer";
import Header from "./Header/Header";
import ItemModal from "./ItemModal";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="page">
      <Header />
      <Main clothingItems={clothingItems} weatherData={weatherData} />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
