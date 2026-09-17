import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="item-modal__content">
        <button className="item-modal__close" type="button" onClick={onClose}>
          &times;
        </button>

        <img className="item-modal__image" src={card?.link} alt={card?.name} />

        <div className="item-modal__footer">
          <p className="item-modal__name">{card?.name}</p>
          <p className="item-modal__weather">Weather: {card?.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
