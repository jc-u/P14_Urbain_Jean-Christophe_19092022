// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserCheck } from '@fortawesome/free-solid-svg-icons'

/* The above code is a React component that is a modal. It is a functional component that takes in a
prop called setModalShowed. It has a function called CloseModal that takes in an event. It
prevents the default action of the event. If the event target is the same as the current target,
it sets the modalShowed to false. It returns a div with a className of modal__container. It has
an onClick event that calls the CloseModal function. It returns a div with a className of modal.
It has a button that */

//const Modal = ({ setModalShowed }) => {
//   const CloseModal = (e) => {
//     e.preventDefault();
//     if (e.target === e.currentTarget) setModalShowed(false);
//   };
//   return (
//     <div className="modal__container" onClick={(e) => CloseModal(e)}>
//       <div className="modal">
//         <button onClick={() => setModalShowed(false)}>X</button>
//         <FontAwesomeIcon icon={faUserCheck} />
//         <h2>Employee Created!</h2>
//       </div>
//     </div>
//   );
// };

// export default Modal;