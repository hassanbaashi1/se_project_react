import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="card" onClick={() => onCardClick(item)}>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.name}</p>
    </li>
  );
}

export default ItemCard;
