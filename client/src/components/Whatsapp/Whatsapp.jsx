import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp_float sm:p-2 sm:mr-1 lg:p-2">
        <a
          href="https://wa.me/+918062181296"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="fa fa-whatsapp whatsapp-icon mb-[10px]"></i>
          <div
            className="whatsapp-text flex justify-center xl:pb-0 xl:text-base xl:gap-1 xl:mt-8 
        sm:pb-10 sm:text-lg lg:pb-10"
          >
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