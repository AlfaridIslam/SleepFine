/* eslint-disable-next-line no-unused-vars */
import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp_float">
        <a
          href="https://wa.me/8898916144"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon mb-[10px]"></i>
          <div className="whatsapp-text flex justify-center gap-1 mt-4">
            <p>Chat</p>
            <p>with</p>
            <p>us</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
