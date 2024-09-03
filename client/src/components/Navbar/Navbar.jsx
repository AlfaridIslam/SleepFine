/* eslint-disable-next-line no-unused-vars */
import React, { useState } from "react";
// import Logo from "../../assets/sleepfinelogo.jpeg";


const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory(null);
  };

  return (
    <>
    <div>
      <img src="src\assets\comfort-planet-logo.png" alt=""   className="h-20 w-28  ml-[70%]"/>
    </div>
    <div className=" flex text-black justify-around shadow-lg z-50 pt-1  gap-[25%]  pb-5 mb-2">
      <div
        className=''>
        <img src="src\assets\sleepfinelogo-3.png" alt=""  className="w-44 h-14"/>
      </div>
      <div className=" menu flex justify-evenly gap-14 cursor-pointer relative z-10 text-[12px] font-sans mt-6  ">
        <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current ">HOME</div>
        <div
          className="relative underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current"
          onMouseEnter={() => setIsProductsDropdownOpen(true)}
          onMouseLeave={() => setIsProductsDropdownOpen(false)}
        >
          PRODUCTS&#10097;
          {isProductsDropdownOpen && (
            <div
              className="absolute left-0 mt-0.5 w-64 bg-white shadow-lg rounded-lg "
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <div
                className={`px-4 py-2 hover:bg-blue-700 ${
                  hoveredCategory === "Medical Rebounded Mattresses"
                    ? "bg-blue-700"
                    : ""
                }`}
                onMouseEnter={() =>
                  handleMouseEnterCategory("Medical Rebounded Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                Medical Rebounded Mattresses
                {hoveredCategory === "Medical Rebounded Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Rebonded Mattress
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Rebonded Super Soft
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Rebonded Latex
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Rebonded Memory
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`px-4 py-2 hover:bg-blue-700 ${
                  hoveredCategory === "Bonnell Spring Mattresses"
                    ? "bg-blue-700"
                    : ""
                }`}
                onMouseEnter={() =>
                  handleMouseEnterCategory("Bonnell Spring Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                Bonnell Spring Mattresses
                {hoveredCategory === "Bonnell Spring Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Bonnell Mattress
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Bonnell Super Soft
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Bonnell Latex
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Bonnell Memory
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`px-4 py-2 hover:bg-blue-700 ${
                  hoveredCategory === "Pocketed Spring Mattresses"
                    ? "bg-blue-700"
                    : ""
                }`}
                onMouseEnter={() =>
                  handleMouseEnterCategory("Pocketed Spring Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                Pocketed Spring Mattresses
                {hoveredCategory === "Pocketed Spring Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Pocketed Mattress
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Pocketed Super Soft
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Pocketed Latex
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Pocketed Memory
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`px-4 py-2 hover:bg-blue-700 ${
                  hoveredCategory === "Pillows" ? "bg-blue-700" : ""
                } `}
                onMouseEnter={(e) => {
                  handleMouseEnterCategory("Pillows");
                  e.stopPropagation(); // Prevent event bubbling
                }}
                onMouseLeave={handleMouseLeaveCategory}
              >
                Pillows
                {hoveredCategory === "Pillows" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Texrised Pillow
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Poly Fiber Pillow
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Foam Pillow
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Latex Pillow
                    </div>
                    <div className="px-4 py-2 hover:bg-blue-600">
                      Memory Pillow
                    </div>
                  </div>
                )}
              </div>
              <div className="px-4 py-2 hover:bg-blue-700">
                Head Boards & Bases
              </div>
              <div className="px-4 py-2 hover:bg-blue-700">Comforters</div>
            </div>
          )}
        </div>
        <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">ABOUT-US</div>
        <div className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-current">CONTACT-US</div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
