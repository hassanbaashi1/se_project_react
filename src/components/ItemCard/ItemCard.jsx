import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img
          onClick={handleCardClick}
          className="card__image"
          src={item.link}
          alt={item.name}
        />
        <p className="card__label">{item.name}</p>
      </div>
    </li>
  );
}

export default ItemCard;
