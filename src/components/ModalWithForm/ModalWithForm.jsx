import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {

  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="modal__content">

        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        />

        <h2 className="modal__title">{title}</h2>

        <form
          className="modal__form"
          onSubmit={onSubmit}
        >
          {children}

          <button
            type="submit"
            className="modal__submit"
          >
            {buttonText}
          </button>
        </form>

      </div>
    </div>
  );
}

export default ModalWithForm;