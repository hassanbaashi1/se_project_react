import "./Main.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main({ clothingItems }) {
  return (
    <main>
      <WeatherCard />
      <p className="main__weather">Today is 61° F / You may want to wear:</p>
      <ClothesSection clothingItems={clothingItems} />
    </main>
  );
}

export default Main;
