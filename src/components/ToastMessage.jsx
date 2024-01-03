import React from "react";
import closeBtn from "../assets/images/event-gifting/cross-btn.png";

const ToastMessage = ({ isVisible, message, close }) => {
  return (
    <div
      className="toast-message"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <div className="content">
        {message}

        <div className="modal-close" onClick={close}>
          <img src={closeBtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToastMessage;
