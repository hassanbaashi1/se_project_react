import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  weatherData,
  handleCardClick,
  handleAddClick,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleAddClick={handleAddClick} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
