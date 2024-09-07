import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
  const [barsOpen, setBarsOpen] = useState(false);

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
    <div className="xl:sm:w-auto sm:w-[140%]">
      <div
        className="xl:flex xl:border-b-[2px] xl:justify-end xl:gap-10 xl:p-2
                       sm:flex sm:justify-around sm:border-b-[2px] sm:p-2
                       lg:justify-end lg:gap-10"
      >
        <div>
          <FontAwesomeIcon icon={faPhone} className="mt-1 pr-2" />
          09866645804
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="mt-1 pr-2" />
          <Link to="/ourstores">Find Store</Link>
        </div>
      </div>

      <div
        className="xl:flex xl:text-black  xl:justify-around xl:shadow-lg xl:z-50  xl:pl-2  xl:pb-5 xl:pt-2 xl:ml-0 
                       sm:grid sm:gap-1 sm:ml-2 sm:mt-1 "
      >
        {/* ____________________________Logo-Image _______________________*/}
        <div onClick={barsOpenHandler} className="xl:hidden sm:pt-2  ">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <Link to="/" className="sm:flex sm:justify-around">
          <img
            src="src/assets/sleepfinelogo-3.png"
            alt=""
            className="xl:w-44   xl:h-14  xl:mt-5  xl:ml-0 xl:pb-0 xl:pt-0
                    sm:w-40 sm:h-14  sm:-mt-10  sm:pb-2 sm:pt-2 "
          />
        </Link>

        {/* ------------------NAV-BAR-Elements---------------------------------- */}

        <div
          className={`xl:flex xl:justify-evenly xl:gap-14 xl:cursor-pointer xl:relative xl:z-10 xl:text-[13px] font-sans xl:mt-10 
              sm:grid sm:gap-4 sm:-mt-1 sm:text-[10px] sm:${
                barsOpen ? "block" : "hidden"
              }`}
        >
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/">HOME</Link>
          </div>
          <div
            className="relative underline decoration-transparent transition duration-100 ease-in-out hover:decoration-current"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            PRODUCTS &#10097;
            {isProductsDropdownOpen && (
              <div
                className="xl:absolute xl:flex xl:-left-2 xl:bg-black xl:bg-opacity-50 xl:text-white xl:rounded-lg xl:shadow-lg xl:z-50 xl:mt-2 xl:font-bold xl:p-2"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                {/* MATTRESS Dropdown */}
                <div
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
                      <div
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
                          <div className="xl:absolute xl:left-60 xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-7">
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Orthomed
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Preference
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Buckinghum
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Latex
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Memory
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Memofy
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Ortho Bonell Spring Collection */}
                      <div
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
                          <div className="xl:absolute xl:left-60 xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-14">
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              6" Silver Corown
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              6" Oxford
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              8" Love Land
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              8" Love Land Pillow Top
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              8" Romantic Euroton
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Latex
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Memory
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pocketed Spring Collection */}
                      <div
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
                          <div className="xl:absolute xl:left-60 xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-20">
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Inspiration
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              6" Eternity-Euroton
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Latex
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Aloe-Vera With Memory
                            </div>
                          </div>
                        )}
                      </div>

                      {/* HR-PU Foam Collection */}
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() =>
                          handleMouseEnterSubCategory("HR-PU Foam Collection")
                        }
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        HR-PU Foam Collection &#10097;
                        {hoveredSubCategory === "HR-PU Foam Collection" && (
                          <div className="xl:absolute xl:left-60 xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-lg xl:pt-5 xl:-z-50 xl:-mt-32">
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Gravity
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Space
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Plush
                            </div>
                            <div className="px-4 py-2 hover:bg-indigo-100">
                              Techniko
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Other main categories */}
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Bonnell Spring Mattresses"
                      ? "bg-blue-700"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnterCategory("Bonnell Spring Mattresses")
                  }
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  BEDS
                </div>
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Pocketed Spring Mattresses"
                      ? "bg-blue-700"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnterCategory("Pocketed Spring Mattresses")
                  }
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  SOFAS
                </div>
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Pillows" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Pillows")}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  ACCESSORIES
                </div>
              </div>
            )}
          </div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/gallery">GALLERY</Link>
          </div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/updates">NEWS & UPDATES</Link>
          </div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">
            <Link to="/ourstores">OUR-STORES</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
