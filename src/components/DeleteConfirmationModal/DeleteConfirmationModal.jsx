import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ card, onCancel, onConfirm }) {
  if (!card) return null;

  return (
    <div className="modal modal_opened">
      <div className="modal__content modal__content_type_confirm">
        <button onClick={onCancel} type="button" className="modal__close">
          &times;
        </button>
        <p className="modal__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <div className="modal__actions">
          <button className="modal__delete-btn" onClick={() => onConfirm(card)}>
            Yes, delete item
          </button>
          <button className="modal__cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
