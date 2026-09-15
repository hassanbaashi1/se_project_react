import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/clothingItems";

function ClothesSection() {
  return (
    <section className="clothes-section">
      {defaultClothingItems.map((item) => (
        <ItemCard key={item._id} name={item.name} image={item.link} />
      ))}
    </section>
  );
}

export default ClothesSection;
