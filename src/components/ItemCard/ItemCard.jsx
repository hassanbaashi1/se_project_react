import "./ItemCard.css";

function ItemCard({ name, image }) {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={name} />
      <p className="card__name">{name}</p>
    </div>
  );
}

export default ItemCard;
