import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UPI from "../../assets/Fotter-Img/img-1.png";
import Card from "../../assets/Fotter-Img/img-2.png";
import WarrantyContent from "../PopupContent/WarrantyCnt";
import TermsContent from "../PopupContent/TermsConditionCnt";
import PrivacyPolicyCnt from '../PopupContent/PrivacyPolicyCnt'
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faWhatsapp,
  
  
} from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
 

  const clickHandler = (ContentComponent) => {
    setPopupContent(<ContentComponent />);
    
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
   
  };

  return (
    <div className='fotter-main-sec bg-black xl:w-full sm:w-[166%] text-white'>
      {/* Popup Section */}
      {showPopup && (
      <div className='Popups-section fixed inset-0 xl:h-screen grid place-items-center bg-black bg-opacity-50 backdrop-blur-sm gap-0'>
      <div className='xl:text-3xl flex xl:mt-0 m-0 p-0 sm:text-5xl sm:mt-16'>
        <button  onClick={closePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
      <div className='bg-white text-black xl:w-[60%] -mt-44 xl:p-8 sm:p-10  z-[2000px] xl:h-80 sm:w-[80%] sm:h-[80%] overflow-y-scroll m-0'>
        <p>{popupContent}</p>
        
      </div>
    </div>
    
      
      )}

      {/* ----------------------------------FOOTER-MAIN-DIV------------------------------------------------- */}

      <div className="fotter-text-sec sm:px-[] sm:grid sm:grid-cols-2 sm:gap-4 xl:flex gap-4 justify-between items-stretch px-10 xl:h-[380px] mt-4">
        {/* ---------OUR PROMISE-------------- */}
        <div className="sm:col-span-2 flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">OUR PROMISE</h1>
          <p className="font-extralight">
            We at Sleep fine are constantly pushing the boundaries of technology and
            innovations to craft best sleep solutions that are built around your
            personal comfort preferences. There is only one mattress that understands
            you, your body, and how you sleep.
          </p>
        </div>

        {/* ------------CATEGORIES----------------- */}
        <div className="flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">CATEGORIES</h1>
          <ul className="font-extralight">
            <li>Mattresses</li>
            <li>Beds</li>
            <li>Sofas</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* ----------------SUPPORT--------------- */}
        <div className="flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">SUPPORT</h1>
          <ul className="font-extralight">
            <li onClick={() => clickHandler(PrivacyPolicyCnt, )} className='cursor-pointer'>Privacy Policy</li>
            <li onClick={() => clickHandler(TermsContent, )} className='cursor-pointer'>Terms & Conditions</li>
            <li onClick={() => clickHandler(WarrantyContent, )} className='cursor-pointer'>Warranty</li>
          </ul>
        </div>

        {/* -------CONTACT US----------------------- */}
        <div className="flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">CONTACT US</h1>
          <ul className="font-extralight">
            <li>E-mail: contact@sleepfineindia.com</li>
            <li>Tel: +91-40-40032084</li>
            <li>
              Sy. NO. 575, 576, Harsha Hospital Lane, Near S.L.N. Apartments,
              Pakalakunta, Kompally, Hyderabad - 500 010.
            </li>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6723251800763!2d78.49592439999999!3d17.523148600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85c89724427b%3A0x7df68edcf8e67783!2sSleep%20fine%20mattress%20Factory!5e0!3m2!1sen!2sin!4v1726652689795!5m2!1sen!2sin"
                width="100%"
                height="100"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ul>
        </div>

        {/* --------------PAYMENT METHODS----------------- */}
        <div className="flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">PAYMENT METHODS</h1>
          <ul className="font-extralight">
            <li>
              <a href="https://merchant.benow.in/ppl/pay/PCEZN00000000814" target="_blank" rel="noopener noreferrer">
                <img src={UPI} alt="UPI" className="w-40" />
              </a>
            </li>
            <li className="mt-2">
              <a href="https://merchant.benow.in/ppl/pay/PCEZN00000000814" target="_blank" rel="noopener noreferrer">
                <img src={Card} alt="Card" className="w-40" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ----------------------------Follow Us--------------- */}
      <div className="follow-Us-sec">
        <div className="text-white mt-2 sm:text-3xl xl:text-lg">
          <h1 className="border-[1px] h-0 mx-14"></h1>
          <h1 className="justify-center items-center flex mt-10">FOLLOW US</h1>
          <ul className="flex justify-center items-center gap-10 mt-5">
            <li>
              <a href="https://www.facebook.com/share/VVfE1WYnTmnDAewa/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCXO1EJTqSaU6vu0lQa_DDFA" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sleepfinemattress?utm_source=qr&igsh=cWFkbnMxY3dtaDJ4" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com/channel/0029VaG3tVKCXC3Gcjsi8s08" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
          </ul>
          <li className="list-none font-extralight text-[11px] flex justify-center items-center mt-5">
            Copyright. All rights reserved @ 2024
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
