import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UPI from "../../assets/Fotter-Img/img-1.png";
import Card from "../../assets/Fotter-Img/img-2.png";

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Main-Sectio bg-black xl:w-full sm:w-[158%]  ">
      <div
        className="text-white  xl:flex xl:mt-10 xl:pt-10 xl:justify-around xl:w-full 
                 sm:mt-20  sm:grid   "
      >
        <div>
          <h1 className="text-lg font-normal xl:mt-0  xl:px-0 sm:mt-5 xl:justify-start sm:justify-start sm:flex sm:text-xl sm:px-4">
            OUR PROMISE
          </h1>
          <ul className="font-extralight xl:mt-10 xl:text-sm sm:mt-2 sm:text-base sm:justify-center sm:flex">
            <li>
              {" "}
              <p
                className="xl:w-60 xl:pr-[0.75rem] xl:pl-[0.25rem] xl:p-0 sm:p-4 "
              >
                We at Sleep fine, are constantly pushing the boundaries of
                technology and innovations to craft best sleep solutions that
                are built around your personal comfort preferences. There is
                only one mattress that understands you, your body and how you
                sleep.
              </p>
            </li>
          </ul>
        </div>

        <div className="  xl:gap-24 xl:p-0 xl:text-lg sm: flex sm:justify-between sm:px-4 ">
          <div className="xl:mt-0 sm:mt-4">
            <h1>CATEGORIES</h1>
            <ul className="font-extralight xl:mt-10  sm:mt-2 xl:text-sm sm:text-lg">
              <li>Mattresses</li>
              <li>Head Boards</li>
              <li>Comforters</li>
              <li>Pillows</li>
            </ul>
          </div>

          <div className="xl:mt-0 sm:mt-4">
            <h1>SUPPORT</h1>
            <ul className="font-extralight xl:mt-10  sm:mt-2  xl:text-sm sm:text-lg">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Warranty</li>
            </ul>
          </div>

          <div className="xl:mt-0 sm:mt-4">
            <h1>CONTACT US</h1>
            <ul className="font-extralight xl:mt-10  sm:mt-2  xl:text-sm sm:text-lg">
              <li>E-mail: sales@sleepfineindia.com</li>
              <li>Tel : +91-40-4040032084</li>
            </ul>
          </div>
        </div>

        <div className="sm:flex sm:justify-center">
          <div className="xl:mt-0 sm:mt-4 ">
            <h1>PAYMENT METHODS</h1>
            <ul className="font-extralight xl:mt-10 grid xl:gap-2 sm:gap-1 text-sm">
              <li>
                <img
                  src={UPI}
                  alt=""
                  className="w-40"
                />
              </li>
              <li>
                {" "}
                <img
                  src={Card}
                  alt=""
                  className="w-40"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white mt-10 sm:text-3xl xl:text-lg">
        <h1 className="border-[1px] h-0 mx-14"></h1>

        <h1 className="justify-center items-center flex mt-10">FOLLOW US</h1>

        <ul className="flex justify-center items-center gap-10 mt-5">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </ul>
        <li className="list-none font-extralight  text-[11px] flex justify-center items-center mt-5">
          Copyright.All rights reserved @ 2024
        </li>
      </div>
    </div>
  );
}

export default Footer;