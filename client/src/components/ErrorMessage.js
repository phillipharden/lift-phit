import React from "react";

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div className="error-modal">
      <div className="error-modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
