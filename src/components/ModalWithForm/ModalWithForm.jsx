import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Save",
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
}) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button className="modal__close" type="button" onClick={onClose}>
          &times;
        </button>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
