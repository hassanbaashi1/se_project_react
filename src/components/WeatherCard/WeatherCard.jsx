import "./WeatherCard.css";
import weatherImage from "../../assets/day/clear.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">61° F</p>
      <img className="weather-card__image" src={weatherImage} alt="weather" />
    </section>
  );
}

export default WeatherCard;
