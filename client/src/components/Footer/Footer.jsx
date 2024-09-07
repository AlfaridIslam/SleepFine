import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='Main-Sectio bg-black xl:w-full sm:w-[600px]'>

<div className="text-white  xl:flex xl:mt-10 xl:pt-10 xl:justify-around xl:w-full
                 sm:mt-2  sm:grid sm:justify-center">
        <div>
          <h1 className="text-lg font-normal xl:mt-0 sm:mt-5">OUR PROMISE</h1>
          <ul className="font-extralight xl:mt-10 text-sm sm:mt-2">
            <li>
              {" "}
              <p>
                We at Sleep fine, are constantly pushing the <br /> boundaries
                of technology and innovations to <br />
                craft best sleep solutions that are built <br />
                around your personal comfort preferences.
                <br /> There is only one mattress that understands
                <br /> you, your body and how you sleep. And we <br />
                have it.
              </p>
            </li>
          </ul>
        </div>

        <div className='xl:mt-0 sm:mt-4'>
          <h1>CATEGORIES</h1>
          <ul className="font-extralight xl:mt-10  sm:mt-2 text-sm">
            <li>Mattresses</li>
            <li>Head Boards</li>
            <li>Comforters</li>
            <li>Pillows</li>
          </ul>
        </div>

        <div className='xl:mt-0 sm:mt-4'>
          <h1>SUPPORT</h1>
          <ul className="font-extralight xl:mt-10  sm:mt-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Warranty</li>
          </ul>
        </div>

        <div className='xl:mt-0 sm:mt-4'>
          <h1>CONTACT US</h1>
          <ul className="font-extralight xl:mt-10  sm:mt-2 text-sm">
            <li>e-mail n : sales@sleepfineindia.com</li>
            <li>Tel : +91-40-4040032084</li>
          </ul>
        </div>

        <div className='xl:mt-0 sm:mt-4'>
          <h1>PAYMENT METHODS</h1>
          <ul className="font-extralight xl:mt-10 grid xl:gap-2 sm:gap-1 text-sm">
            <li>
              <img
                src="src\assets\Fotter-Img\img-1.png"
                alt=""
                className="w-40"
              />
            </li>
            <li>
              {" "}
              <img
                src="src\assets\Fotter-Img\img-2.png"
                alt=""
                className="w-40"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white mt-10">
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
  )
}

export default Footer;