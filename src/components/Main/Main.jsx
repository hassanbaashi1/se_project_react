import "./Main.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ clothingItems, weatherData }) {
  const weatherType = getWeatherCondition(weatherData.main?.temp);
  const filteredClothingItems = clothingItems.filter(
    (item) => item.weather === weatherType,
  );
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <p className="main__weather">
        Today is {Math.round(weatherData.main?.temp)}° F / You may want to wear:
      </p>
      <ClothesSection clothingItems={filteredClothingItems} />
    </main>
  );
}

export default Main;
