import React from "react";

const Modal = ({ setModalShowed }) => {
  const CloseModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModalShowed(false);
  };
  return (
    <div className="modal__container" onClick={(e) => CloseModal(e)}>
      <div className="modal">
        <h2>Employee Created!</h2>
        <button onClick={() => setModalShowed(false)}>X</button>
      </div>
    </div>
  );
};

export default Modal;