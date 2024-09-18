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

       

        <div className=" xl:flex xl:gap-14 xl:p-0 xl:text-lg sm:grid sm:grid-cols-2 sm:gap-10  sm:p-10 xl:ml-0 sm:ml-20">

          <div className="xl:mt-0 sm:mt-4">
            <h1>CATEGORIES</h1>
            <ul className="font-extralight xl:mt-10  sm:mt-2 xl:text-sm sm:text-lg">
              <li>Mattresses</li>
              <li>Beds</li>
              <li>Sofas</li>
              <li>Accessories</li>
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
              <li>E-mail: contact@sleepfineindia.com</li>
              <li>Tel : +91-40-40032084</li>
              <li>Sy. NO. 575, 576, Harsha Hospital Lane,<br />
              Near S.L.N. Apartments, Pakalakunta, <br />
              Kompally, Hyderabad - 500 010.</li>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.6723251800763!2d78.49592439999999!3d17.523148600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85c89724427b%3A0x7df68edcf8e67783!2sSleep%20fine%20mattress%20Factory!5e0!3m2!1sen!2sin!4v1726652689795!5m2!1sen!2sin"   width="75%"
              height="100"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

            </ul>
          </div>

          <div className="sm:flex sm:justify-center xl:mr-0 sm:mr-40">
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

      
       
      </div>

{/* -----------------FOLLOW US ------------------------*/}

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