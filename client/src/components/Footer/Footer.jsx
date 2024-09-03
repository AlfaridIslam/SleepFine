import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Whatsapp from "../Whatsapp/Whatsapp";

function Footer() {
  return (
  
    <div className="relative bg-black">
      <Whatsapp/>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 sm: text-white gap-20 text-[18px] ml-10 mr-10 mt-10 pt-10 justify-around ">
        <div>
          <h1 className="text-lg font-normal">OUR PROMISE</h1>
          <ul className="font-extralight mt-10 text-sm">
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

        <div>
          <h1>CATEGORIES</h1>
          <ul className="font-extralight mt-10 text-sm">
            <li>Mattresses</li>
            <li>Head Boards</li>
            <li>Comforters</li>
            <li>Pillows</li>
          </ul>
        </div>

        <div>
          <h1>SUPPORT</h1>
          <ul className="font-extralight mt-10 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Warranty</li>
          </ul>
        </div>

        <div>
          <h1>CONTACT US</h1>
          <ul className="font-extralight mt-10 text-sm">
            <li>e-mail id : sales@sleepfineindia.com</li>
            <li>Tel : +91-40-4040032084</li>
          </ul>
        </div>

        <div>
          <h1>PAYMENT METHODS</h1>
          <ul className="font-extralight mt-10 grid gap-2 text-sm">
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

        <h1 className="  justify-center items-center flex mt-10">FOLLOW US</h1>

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
        <li className="  list-none font-extralight  text-[11px] flex justify-center items-center mt-5">
          Copyright.All rights reserved @ 2024
        </li>
      </div>
    </div>
  );
}

export default Footer;
