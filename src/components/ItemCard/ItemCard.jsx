import "./ItemCard.css";

function ItemCard({ card, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <img className="card__image" src={card.link} alt={card.name} />
      <p className="card__name">{card.name}</p>
    </div>
  );
}

export default ItemCard;
