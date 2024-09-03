import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

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

  return (
    <div>
      <div className="flex border-b-[2px] justify-end gap-10 p-2">
        <div>
          <FontAwesomeIcon icon={faPhone} className="mt-1 pr-2" />08978878769
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="mt-1 pr-2" />Find Store
        </div>
      </div>

      <div className="flex text-black justify-around shadow-lg z-50 gap-[25%] pb-5 pt-2">
        <div>
          <img src="src/assets/sleepfinelogo-3.png" alt="" className="w-44 h-14 mt-5" />
        </div>
        <div className="menu flex justify-evenly gap-14 cursor-pointer relative z-10 text-[13px] font-sans mt-10">
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">HOME</div>
          <div
            className="relative underline decoration-transparent transition duration-100 ease-in-out hover:decoration-current"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            PRODUCTS &#10097;
            {isProductsDropdownOpen && (
              <div
                className="absolute flex -left-2 bg-black bg-opacity-50 text-white rounded-lg shadow-lg z-50 mt-2 font-bold p-2"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                {/* MATTRESS Dropdown */}
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-slate-50 hover:text-black ${
                    hoveredCategory === "Medical Rebounded Mattresses" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Medical Rebounded Mattresses")}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  MATTRESS
                  {hoveredCategory === "Medical Rebounded Mattresses" && (
                    <div className="absolute -left-1 mt-[9px] w-60 bg-white shadow-lg rounded-md pt-5 font-medium ">
                      {/* Orthopedic Bonded Collection */}
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() => handleMouseEnterSubCategory("Orthopedic Bonded Collection")}
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Orthopedic Bonded Collection &#10097;
                        {hoveredSubCategory === "Orthopedic Bonded Collection" && (
                          <div className="absolute left-60 w-56 bg-white shadow-lg rounded-lg pt-5 -z-50 -mt-7">
                            <div className="px-4 py-2 hover:bg-indigo-100">Orthomed</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Preference</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Buckinghum</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Latex</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Memory</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Memofy</div>
                          </div>
                        )}
                      </div>
                      
                      {/* Ortho Bonell Spring Collection */}
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() => handleMouseEnterSubCategory("Ortho Bonell Spring Collection")}
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Ortho Bonell Spring Collection &#10097;
                        {hoveredSubCategory === "Ortho Bonell Spring Collection" && (
                          <div className="absolute left-60 w-56 bg-white shadow-lg rounded-lg pt-5 -z-50 -mt-14">
                            <div className="px-4 py-2 hover:bg-indigo-100">6" Silver Corown</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">6" Oxford</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">8" Love Land</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">8" Love Land Pillow Top</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">8" Romantic Euroton</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Latex</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Memory</div>
                          </div>
                        )}
                      </div>
                      
                      {/* Pocketed Spring Collection */}
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() => handleMouseEnterSubCategory("Pocketed Spring Collection")}
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        Pocketed Spring Collection &#10097;
                        {hoveredSubCategory === "Pocketed Spring Collection" && (
                          <div className="absolute left-60 w-56 bg-white shadow-lg rounded-lg pt-5 -z-50 -mt-20">
                            <div className="px-4 py-2 hover:bg-indigo-100">Inspiration</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">6" Eternity-Euroton</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Latex</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Aloe-Vera With Memory</div>
                          </div>
                        )}
                      </div>
                      
                      {/* HR-PU Foam Collection */}
                      <div
                        className="px-4 py-2 hover:bg-indigo-100"
                        onMouseEnter={() => handleMouseEnterSubCategory("HR-PU Foam Collection")}
                        onMouseLeave={handleMouseLeaveSubCategory}
                      >
                        HR-PU Foam Collection &#10097;
                        {hoveredSubCategory === "HR-PU Foam Collection" && (
                          <div className="absolute left-60 w-56 bg-white shadow-lg rounded-lg pt-5 -z-50 -mt-32">
                            <div className="px-4 py-2 hover:bg-indigo-100">Gravity</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Space</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Plush</div>
                            <div className="px-4 py-2 hover:bg-indigo-100">Techniko</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Other main categories */}
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Bonnell Spring Mattresses" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Bonnell Spring Mattresses")}
                  onMouseLeave={handleMouseLeaveCategory}
                >
                  BEDS
                </div>
                <div
                  className={`px-4 py-2 rounded-lg hover:bg-white hover:text-black ${
                    hoveredCategory === "Pocketed Spring Mattresses" ? "bg-blue-700" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnterCategory("Pocketed Spring Mattresses")}
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
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">GALLERY</div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">NEWS & UPDATES</div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">OUR-STORES</div>
          <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">CONTACT-US</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
