import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UPI from "../../assets/Fotter-Img/img-1.png";
import Qrimg from "../../assets/Qrimg.jpeg";
import WarrantyContent from "../PopupContent/WarrantyCnt";
import TermsContent from "../PopupContent/TermsConditionCnt";
import PrivacyPolicyCnt from '../PopupContent/PrivacyPolicyCnt';
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [qrimg, setQrimg] = useState(false);

  const clickHandler = (ContentComponent) => {
    setPopupContent(<ContentComponent />);
    setShowPopup(true);
    setQrimg(false); 
  };

  const handleUPIClick = () => {
    setQrimg(true);
    setShowPopup(false); 
  };

  const closePopup = () => {
    setShowPopup(false);
    setQrimg(false); 
  };

  return (
    <div className="fotter-main-sec bg-black xl:w-full sm:w-[166%] text-white">
      {/* Popup Section */}
      {showPopup && (
        <div className="Popups-section fixed inset-0 xl:h-screen grid place-items-center bg-black bg-opacity-50 backdrop-blur-sm gap-0">
          <div className="xl:text-3xl flex xl:mt-10 m-0 p-0 sm:text-5xl sm:mt-16">
            <button onClick={closePopup}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <div className="bg-white text-black xl:w-[60%] -mt-30 xl:p-8 sm:p-10 z-[2000px] xl:h-90 sm:w-[80%] sm:h-[80%] overflow-y-scroll m-0">
            <p>{popupContent}</p>
          </div>
        </div>
      )}

      {qrimg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen backdrop-blur-sm sm:h-[100%]">
          <div className="xl:h-60 xl:w-80 p-4 text-center sm:h-96 sm:w-[60] sm:-mt-40">
            <img src={Qrimg} alt="QR Code" className="mb-2 " />
            <h1 className="xl:text-base sm:text-4xl">
              UPI ID: paytmqr603x2h@ptys
            </h1>
            <button onClick={closePopup} className="mt-2 text-red-500 text-lg">
              Close
            </button>
          </div>
        </div>
      )}

      {/* ----------------------------------FOOTER-MAIN-DIV------------------------------------------------- */}
      <div className="fotter-text-sec sm:px-[] sm:grid sm:grid-cols-2 sm:gap-4 xl:flex gap-4 justify-between items-stretch px-10 xl:h-[380px] mt-4">
        {/* ---------OUR PROMISE-------------- */}
        <div className="sm:col-span-2 flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">OUR PROMISE</h1>
          <p className="font-extralight">
            We at Sleep fine are constantly pushing the boundaries of technology
            and innovations to craft best sleep solutions that are built around
            your personal comfort preferences. There is only one mattress that
            understands you, your body, and how you sleep.
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
            <li
              onClick={() => clickHandler(PrivacyPolicyCnt)}
              className="cursor-pointer"
            >
              Privacy Policy
            </li>
            <li
              onClick={() => clickHandler(TermsContent)}
              className="cursor-pointer"
            >
              Terms & Conditions
            </li>
            <li
              onClick={() => clickHandler(WarrantyContent)}
              className="cursor-pointer"
            >
              Warranty
            </li>
            {/* Warranty registration */}
            <li>
              <Link to = "/warranty-form">Warranty Registration</Link>
            </li>
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
              Pakalakunta, Kompally, Hyderabad , Telangana , India - 500 010.
            </li>
            <div className="mt-4">
            <a href="https://maps.app.goo.gl/eStfe3XsvR46KMYG9" target ="_blank" >
              <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728109413/googlemap_ozetao.png" alt=""  className="xl:w-[60%] xl:h-20 sm:w-[40%]" />
             </a>
            </div>
          </ul>
        </div>

        {/* --------------PAYMENT METHODS----------------- */}
        <div className="flex-1 p-4 rounded-lg">
          <h1 className="text-lg font-normal mb-2">PAYMENT METHODS</h1>
          <ul className="font-extralight">
            <li>
              <img
                src={UPI}
                alt="UPI"
                className="w-40 cursor-pointer"
                onClick={handleUPIClick}
              />
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
              <a
                href="https://www.facebook.com/share/VVfE1WYnTmnDAewa/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCXO1EJTqSaU6vu0lQa_DDFA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sleepfinemattress?utm_source=qr&igsh=cWFkbnMxY3dtaDJ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com/channel/0029VaG3tVKCXC3Gcjsi8s08"
                target="_blank"
                rel="noopener noreferrer"
              >
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