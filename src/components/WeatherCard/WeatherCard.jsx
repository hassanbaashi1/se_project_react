import "./WeatherCard.css";
import weatherImage from "../../assets/day/clear.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {Math.round(weatherData.main?.temp)}° F
      </p>
      <img className="weather-card__image" src={weatherImage} alt="weather" />
    </section>
  );
}

export default WeatherCard;
