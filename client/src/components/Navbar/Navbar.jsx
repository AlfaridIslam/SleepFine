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
          <a href="tel: 08062181296" className="hover:underline">
            08062181296
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

          {/* <div
            className="relative underline decoration-transparent transition duration-100 ease-in-out hover:decoration-current"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
            onClick={() => setIsProductsDropdownOpen(true)}
            onDoubleClick={() => !setIsProductsDropdownOpen(false)}
          >
            PRODUCTS &#10097; */}

          {/* PRODUCTS &#10097;

            
          
            {/* PRODUCTS &#10097;

e
            {isProductsDropdownOpen && (
              <div
                className="xl:absolute xl:flex xl:-left-2 xl:bg-black xl:bg-opacity-50 xl:text-white xl:rounded-lg xl:shadow-lg xl:z-50 xl:mt-2 xl:font-bold xl:p-2"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                onClick={() => setIsProductsDropdownOpen(true)}
                onDoubleClick={() => setIsProductsDropdownOpen(false)} */}

          {/* > */}

          {/* MATTRESS Dropdown */}
          {/* <div

              {/* > */}

          {/* MATTRESS Dropdown */}
          {/* <div

                  className={`px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-black ${
                    hoveredCategory === "Medical Rebounded Mattresses"
                      ? "bg-blue-700"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnterCategory("Medical Rebounded Mattresses")
                  }
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  MATTRESS
                  {hoveredCategory === "Medical Rebounded Mattresses" && (
                    <div className="xl:absolute xl:-left-1 xl:mt-[9px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium ">
                      {/* Orthopedic Bonded Collection */}

          {/* <div

                      {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory(
                            "Orthopedic Bonded Collection"
                          )
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Orthopedic Bonded Collection &#10097;
                        {hoveredSubCategory ===
                          "Orthopedic Bonded Collection" && (
                          <div className="xl:absolute xl:left-60 xl:w-[9rem] xl:flex xl:flex-col xl:p-[10px]  xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-7 sm:grid">
                            <Link
                              to="product-details/orthomed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Orthomed
                            </Link>
                            <Link
                              to="product-details/preference"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Preference
                            </Link>
                            <Link
                              to="product-details/buckingham"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Buckingham
                            </Link>
                            <Link
                              to="product-details/orthopedic-aloe-vera-latex"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Latex
                            </Link>
                            <Link
                              to="product-details/orthopedic-aloe-vera-memory"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Memory
                            </Link>
                            <Link
                              to="product-details/memofy"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Memofy
                            </Link>
                          </div>
                        )}
                      </div> */}

          {/* Ortho Bonell Spring Collection */}
          {/* <div

                      {/* Ortho Bonell Spring Collection */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory(
                            "Ortho Bonell Spring Collection"
                          )
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Ortho Bonell Spring Collection &#10097;
                        {hoveredSubCategory ===
                          "Ortho Bonell Spring Collection" && (
                          <div className="xl:absolute xl:left-60 xl:w-[9rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-14 sm:grid">
                            <Link
                              to="product-details/6inch-silver-crown"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              6" Silver Crown
                            </Link>
                            <Link
                              to="product-details/6inch-oxford"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              6" Oxford
                            </Link>
                            <Link
                              to="product-details/8inch-love-land"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              8" Love Land
                            </Link>
                            <Link
                              to="product-details/8inch-love-land-pillow-top"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              8" Love Land Pillow Top
                            </Link>
                            <Link
                              to="product-details/8inch-romantic-euroton"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              8" Romantic Euroton
                            </Link>
                            <Link
                              to="product-details/ortho-bonnell-aloe-vera-with-latex"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Latex
                            </Link>
                            <Link
                              to="product-details/ortho-bonnell-aloe-vera-with-memory"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Memory
                            </Link>
                          </div>
                        )}
                      </div> */}

          {/* Pocketed Spring Collection */}
          {/* <div

                      {/* Pocketed Spring Collection */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory(
                            "Pocketed Spring Collection"
                          )
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Pocketed Spring Collection &#10097;
                        {hoveredSubCategory ===
                          "Pocketed Spring Collection" && (
                          <div className="xl:absolute xl:left-60 xl:w-[9rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-20 sm:grid">
                            <Link
                              to="product-details/pocketed-spring-inspiration"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Inspiration
                            </Link>
                            <Link
                              to="product-details/pocketed-spring-6inch-eternity-euroton"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              6" Eternity-Euroton
                            </Link>
                            <Link
                              to="product-details/pocketed-spring-aloe-vera-with-latex"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Latex
                            </Link>
                            <Link
                              to="product-details/pocketed-spring-aloe-vera-with-memory"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloe-Vera With Memory
                            </Link>
                          </div>
                        )}
                      </div> */}

          {/* HR-PU Foam Collection */}
          {/* <div

                      {/* HR-PU Foam Collection */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("HR-PU Foam Collection")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        HR-PU Foam Collection &#10097;
                        {hoveredSubCategory === "HR-PU Foam Collection" && (
                          <div className="xl:absolute xl:left-60 xl:w-[9rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-32 sm:grid ">
                            <Link
                              to="product-details/hr-pu-gravity"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Gravity
                            </Link>
                            <Link
                              to="product-details/hr-pu-space"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Space
                            </Link>
                            <Link
                              to="product-details/hr-pu-plush"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Plush
                            </Link>
                            <Link
                              to="product-details/hr-pu-techniko"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Techniko
                            </Link>
                          </div>
                        )}
                      </div> */}

          {/* </div>
                  )}
                </div> } */}

          {/* BEDS Dropdown */}
          {/* <div

                    {/* </div>
                  )}
                </div> } */}

          {/* BEDS Dropdown */}
          {/* <div

                  className={`px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-black ${
                    hoveredCategory === "Beds" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Beds")}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  BEDS
                  {hoveredCategory === "Beds" && (
                    <div className="xl:absolute xl:left-[4.75rem] xl:mt-[9px] xl:w-[9rem] xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium">
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("King Size Bed")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        King Size Bed &#10097;
                        {hoveredSubCategory === "King Size Bed" && (
                          <div className="xl:absolute xl:left-[9rem] xl:w-[8rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-7">
                            <Link
                              to="product-details/platform-bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Platform Bed
                            </Link>
                            <Link
                              to="product-details/Panel-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Panel Bed
                            </Link>
                            <Link
                              to="product-details/Canopy-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Canopy Bed
                            </Link>
                            <Link
                              to="product-details/Sleigh-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Sleigh Bed
                            </Link>
                          </div>
                        )}
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("Queen Size Bed")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Queen Size Bed &#10097;
                        {hoveredSubCategory === "Queen Size Bed" && (
                          <div className="xl:absolute xl:left-[9rem] xl:w-[8rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-14">
                            <Link
                              to="product-details/Murphy-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Murphy Bed
                            </Link>
                            <Link
                              to="product-details/Loft-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Loft Bed
                            </Link>
                            <Link
                              to="product-details/Bunk-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Bunk Bed
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div> */}

          {/* SOFAS Dropdown */}
          {/* <div 
                {/* SOFAS Dropdown */}
          {/* <div 

                  className={`px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-black ${
                    hoveredCategory === "Sofas" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Sofas")}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  SOFAS
                  {hoveredCategory === "Sofas" && (
                    <div className="xl:absolute xl:left-[9rem] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:font-medium">
                      {/* Standard-Sofa */}

          {/* <div

                      {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("Standard Sofa")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Standard Sofa &#10097;
                        {hoveredSubCategory === "Standard Sofa" && (
                          <div className="xl:flex xl:flex-col  xl:absolute xl:left-full xl:w-[7rem] xl:top-[1rem] xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-1">
                            <Link
                              to="product-details/Chesterfield"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Chesterfield
                            </Link>
                            <Link
                              to="product-details/Lawson"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Lawson
                            </Link>
                            <Link
                              to="product-details/Tuxedo"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Tuxedo
                            </Link> */}

          {/* Add other links here */}
          {/* </div>
                        )}
                      </div> */}
          {/* Add other subcategories here */}
          {/* <div

                            {/* Add other links here */}
          {/* </div>
                        )}
                      </div> */}
          {/* Add other subcategories here */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("Sectional Sofa")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Sectional Sofa &#10097;
                        {hoveredSubCategory === "Sectional Sofa" && (
                          <div className="xl:flex xl:flex-col  xl:absolute xl:left-60 xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-14">
                            <Link
                              to="product-details/L-Shaped"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              L-Shaped
                            </Link>
                            <Link
                              to="product-details/U-Shaped"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              U-Shaped
                            </Link>
                            <Link
                              to="product-details/Modular"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Modular
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div> */}
          {/* Accessories Dropdown */}
          {/* <div

                </div> */}
          {/* Accessories Dropdown */}
          {/* <div

                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Accessories" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Accessories")}
                  onMouseLeave={handleMouseLeaveCategory} */}

          {/* > */}
          {/* ACCESSORIES
                  {hoveredCategory === "Accessories" && (
                    <div className="xl:absolute xl:left-[14.75rem] xl:mt-[9px] xl:w-[8rem] xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium ">
                      {/* Sectional Sofa */}
          {/* <div
                {/* > */}
          {/* ACCESSORIES
                  {hoveredCategory === "Accessories" && (
                    <div className="xl:absolute xl:left-[14.75rem] xl:mt-[9px] xl:w-[8rem] xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium ">
                      {/* Sectional Sofa */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("Comforters")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Mattress Protector &#10097;
                        {hoveredSubCategory === "Comforters" && (
                          <div className="xl:absolute xl:left-[8rem] xl:w-[6rem] xl:flex xl:flex-col xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-7">
                            <Link
                              to="product-details/Baffle-Box"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Baffle Box
                            </Link>
                            <Link
                              to="product-details/Sewn-Through"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Sewn Through
                            </Link>
                          </div>
                        )}
                      </div>  */}

          {/* Add other subcategories here */}
          {/* <div
                      {/* Add other subcategories here */}
          {/* <div

                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("Pillows")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Pillows &#10097;
                        {hoveredSubCategory === "Pillows" && (
                          <div className="xl:left-[8rem] xl:flex xl:flex-col xl:absolute xl:w-[8rem] xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-14">
                            <Link
                              to="product-details/memory-foam"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Memory Foam
                            </Link>
                            <Link
                              to="product-details/latex"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Latex
                            </Link>
                            <Link
                              to="product-details/plush-foam"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Plush Foam
                            </Link>
                            <Link
                              to="product-details/aloevera-fibre"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloevera & Fibre
                            </Link>
                            <Link
                              to="product-details/PolyFibre-Textile"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              PolyFibre Textile
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div> */}

          {/* </div> */}
          {/* )} */}
          {/* </div> */}
          {/* <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to=" /Mattress">Mattress</Link>
          </div>        {/* <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current"> */}
          {/* <Link to="/updates">NEWS & UPDATES</Link>
          </div> */}

          {/* </div> */}
          {/* )} */}
          {/* </div> */}
          {/* <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to=" /Mattress">Mattress</Link>
          </div>        {/* <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current"> */}
          {/* <Link to="/updates">NEWS & UPDATES</Link>
          </div> */}
          {/* <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/ourstores">OUR-STORES</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


