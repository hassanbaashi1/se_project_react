import "./ItemCard.css";
function ItemCard({ item, onCardClick }) {
  return (
    <li className="card" onClick={() => onCardClick(item)}>
      <div className="card__image-container">
        <img src={item.imageUrl} alt={item.name} className="card__image" />
        <p className="card__title">{item.name}</p>
      </div>
    </li>
  );
}

export default ItemCard;
