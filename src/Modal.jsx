import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context.js';

const Modal = () => {
  const { isModalShow, clseModal } = useGlobalContext();

  return (
    <div className={`modal-overlay ${isModalShow && 'show-modal'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={clseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
