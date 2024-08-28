import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex bg-slate-300 text-slate-700 font-sans font-medium justify-around items-center">
      <Link
        to="/"
        className="logo cursor-pointer border-l-indigo-300 rounded-[50%] text-white bg-indigo-300 
        p-[18px] my-1 matemasie-regular text-2xl "
      >
        SleepFine
      </Link>
      <div className="menu flex justify-evenly gap-4 cursor-pointer relative z-10 text-[20px]">
        <Link to="/" className="hover:bg-violet-600">
          HOME
        </Link>
        <div
          className="relative hover:bg-violet-600 font-bold"
          onMouseEnter={() => setIsProductsDropdownOpen(true)}
          onMouseLeave={() => setIsProductsDropdownOpen(false)}
        >
          PRODUCTS&#10097;
          {isProductsDropdownOpen && (
            <div
              className="absolute left-0 mt-0.5 w-64 bg-white shadow-lg rounded-lg py-2"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              {/* Medical Rebounded Mattresses */}
              <div
                className="block px-4 py-2 hover:bg-blue-700 relative"
                onMouseEnter={() =>
                  handleMouseEnterCategory("Medical Rebounded Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                <Link to="/products/medical" className="block">
                  Medical Rebounded Mattresses
                </Link>
                {hoveredCategory === "Medical Rebounded Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <Link
                      to="/products/medical/medicalrebonded"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Rebonded Mattress
                    </Link>
                    <Link
                      to="/products/medical/medicalsupersoft"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Rebonded Super Soft
                    </Link>
                    <Link
                      to="/products/medical/medicallatex"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Rebonded Latex
                    </Link>
                    <Link
                      to="/products/medical/medicalmemory"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Rebonded Memory
                    </Link>
                  </div>
                )}
              </div>
              {/* Bonnell Spring Mattresses */}
              <div
                className="block px-4 py-2 hover:bg-blue-700 relative"
                onMouseEnter={() =>
                  handleMouseEnterCategory("Bonnell Spring Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                <Link to="/products/bonnell" className="block">
                  Bonnell Spring Mattresses
                </Link>
                {hoveredCategory === "Bonnell Spring Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <Link
                      to="/products/bonnell"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Bonnell Mattress
                    </Link>
                    <Link
                      to="/products/bonnell"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Bonnell Super Soft
                    </Link>
                    <Link
                      to="/products/bonnell"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Bonnell Latex
                    </Link>
                    <Link
                      to="/products/bonnell"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Bonnell Memory
                    </Link>
                  </div>
                )}
              </div>
              {/* Pocketed Spring Mattresses */}
              <div
                className="block px-4 py-2 hover:bg-blue-700 relative"
                onMouseEnter={() =>
                  handleMouseEnterCategory("Pocketed Spring Mattresses")
                }
                onMouseLeave={handleMouseLeaveCategory}
              >
                <Link to="/products/pocketed" className="block">
                  Pocketed Spring Mattresses
                </Link>
                {hoveredCategory === "Pocketed Spring Mattresses" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <Link
                      to="/products/pocketed"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Pocketed Mattress
                    </Link>
                    <Link
                      to="/products/pocketed"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Pocketed Super Soft
                    </Link>
                    <Link
                      to="/products/pocketed"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Pocketed Latex
                    </Link>
                    <Link
                      to="/products/pocketed"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Pocketed Memory
                    </Link>
                  </div>
                )}
              </div>
              {/* Pillows */}
              <div
                className="block px-4 py-2 hover:bg-blue-700 relative"
                onMouseEnter={(e) => {
                  handleMouseEnterCategory("Pillows");
                  e.stopPropagation(); // Prevent event bubbling
                }}
                onMouseLeave={handleMouseLeaveCategory}
              >
                <Link to="/products/pillows" className="block">
                  Pillows
                </Link>
                {hoveredCategory === "Pillows" && (
                  <div className="absolute left-full top-0 mt-0.5 w-56 bg-white shadow-lg rounded-lg">
                    <Link
                      to="/products/pillows"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Texrised Pillow
                    </Link>
                    <Link
                      to="/products/pillows"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Poly Fiber Pillow
                    </Link>
                    <Link
                      to="/products/pillows"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Foam Pillow
                    </Link>
                    <Link
                      to="/products/pillows"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Latex Pillow
                    </Link>
                    <Link
                      to="/products/pillows"
                      className="block px-4 py-2 hover:bg-blue-600"
                    >
                      Memory Pillow
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/products/headboards"
                className="block px-4 py-2 hover:bg-blue-700"
              >
                Head Boards & Bases
              </Link>
              <Link
                to="/products/comforters"
                className="block px-4 py-2 hover:bg-blue-700"
              >
                Comforters
              </Link>
            </div>
          )}
        </div>
        <div className="space-x-3">
          <Link to="/aboutus" className="hover:bg-violet-600">
            ABOUT-US
          </Link>
          <Link to="/contactus" className="hover:bg-violet-600">
            CONTACT-US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
