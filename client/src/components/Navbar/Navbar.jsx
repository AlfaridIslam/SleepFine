import React, { useState, useEffect } from "react";

import Mattress from "../Mattress/Mattress.jsx";
import Beds from "../Beds/Beds.jsx";
import Sofas from "../Sofas/Sofas.jsx";
import Accessories from "../Accessories/Accessories.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/sleepfinelogo-3.png";
import logoR from "../../assets/SleepFinelogoR.png"

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [barsOpen, setBarsOpen] = useState(false);
  const location = useLocation();

  // Close the bars menu when the location changes (navigating to another page)
  useEffect(() => {
    setBarsOpen(false);
    setIsProductsDropdownOpen(false);
  }, [location]);

  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory(null);
    setHoveredSubCategory(null); // Close subcategory on main category mouse leave
  };

  const handleMouseEnterSubCategory = (subCategory) => {
    setHoveredSubCategory(subCategory);
  };

  const handleMouseLeaveSubCategory = () => {
    setHoveredSubCategory(null);
  };

  const barsOpenHandler = () => {
    setBarsOpen(!barsOpen);
  };

  return (
    <div>
      <div
        className="w-[166%] xl:w-full xl:flex xl:border-b-[2px] xl:justify-end xl:gap-10 xl:p-2 xl:text-base xl:bg-white
  sm:flex sm:justify-center sm:text-3xl sm:gap-20 sm:bg-amber-300 sm:w-[166%] sm:p-4"
      >
        <div>
          <FontAwesomeIcon icon={faPhone} className="mt-1 pr-2" />
          <a href="tel: 09346023775" className="hover:underline">
            09346023775
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="mt-1 pr-2" />
          <Link to="/ourstores" className="hover:underline">
            Find Store
          </Link>
        </div>
      </div>

      <div
        className="xl:flex xl:text-black  xl:justify-around xl:shadow-lg xl:z-50  xl:pl-2  xl:pb-5 xl:pt-2 xl:ml-0 
                        sm:justify-end sm:gap-1 sm:ml-2 sm:mt-1 sm:grid"
      >
        {/* _________Logo-Image ________*/}
        <div
          onClick={barsOpenHandler}
          className="xl:hidden sm:flex sm:p-4 sm:ml-[4.5rem] "
        >
          <FontAwesomeIcon icon={faBars} className="sm:h-10 sm:ml-2 sm:mt-2" />
        </div>

        <Link to="/" className="">
          <img
           //src={logoR}
          src="https://res.cloudinary.com/dpsmbluby/image/upload/v1729774444/logosince11_vn89hm.png"
         
            alt="Logo"
            className="xl:w-44   xl:h-14  xl:mt-5  xl:ml-0 xl:pb-0 xl:pt-0 xl:p-0  sm:justify-center sm:ml-[450px] sm:py-2  sm:h-20 sm:-mt-20"
          />
        </Link>

        {/* ------------------NAV-BAR-Elements---------------------------------- */}

        <div
          className={`xl:flex xl:justify-evenly xl:gap-14 xl:cursor-pointer xl:relative xl:z-10 xl:text-[13px] font-sans xl:mt-10 
              sm:grid sm:gap-4   sm:ml-24   sm:text-[20px]  sm:${
                barsOpen ? "block" : "hidden"
              }`}
        >
          <div className=" underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/">HOME</Link>
          </div>
          <div className=" underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Mattress />
          </div>
          <div className=" xl:-pt-10 relative underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Beds />
          </div>
          <div className=" underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Sofas />
          </div>
          <div className=" underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Accessories />
          </div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/blog">BLOG</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


