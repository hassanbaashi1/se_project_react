import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { getWeatherCondition } from "../../utils/weatherApi";

function Main({ clothingItems, weatherData, onCardClick }) {
  const temperature = weatherData.main?.temp;

  const weatherType =
    temperature !== undefined ? getWeatherCondition(temperature) : "";

  const filteredClothingItems = clothingItems.filter(
    (item) => item.weather === weatherType,
  );

  return (
    <main>
      <WeatherCard weatherData={weatherData} />

      {temperature !== undefined && (
        <p className="main__weather">
          Today is {Math.round(temperature)}° F / You may want to wear:
        </p>
      )}

      <ul className="main__items">
        {filteredClothingItems.map((card) => (
          <li className="main__item" key={card._id}>
            <ItemCard card={card} onCardClick={onCardClick} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
