import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems }) {
  return (
    <section className="clothes-section">
      {clothingItems.map((item) => (
        <ItemCard key={item._id} name={item.name} image={item.link} />
      ))}
    </section>
  );
}

export default ClothesSection;
