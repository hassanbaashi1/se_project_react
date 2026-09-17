import "./WeatherCard.css";
import weatherImage from "../../assets/day/clear.png";

function WeatherCard({ weatherData }) {
  const temperature = weatherData.main?.temp;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {typeof temperature === "number" ? `${Math.round(temperature)}° F` : ""}
      </p>

      <img
        className="weather-card__image"
        src={weatherImage}
        alt="Current weather"
      />
    </section>
  );
}

export default WeatherCard;
