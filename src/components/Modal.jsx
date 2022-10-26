import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ setModalShowed }) => {
  const CloseModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModalShowed(false);
  };
  return (
    <div className="modal__container" onClick={(e) => CloseModal(e)}>
      <div className="modal">
        <button onClick={() => setModalShowed(false)}>X</button>
        <FontAwesomeIcon icon={faUserCheck} />
        <h2>Employee Created!</h2>
      </div>
    </div>
  );
};

export default Modal;