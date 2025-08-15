import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p>Your Items</p>
        <button onClick={handleAddClick}>+ Add New</button>
      </div>
      <ul className="cards__list">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id || item.name}
            item={item}
            onCardClick={handleCardClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
