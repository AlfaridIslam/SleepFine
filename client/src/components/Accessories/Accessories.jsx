import { useState } from 'react';
import { Link } from 'react-router-dom';

const Accessories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [hoveredSubCategory, setHoveredSubCategory] = useState("");

  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory("");
  };

  const handleMouseEnterSubCategory = (subCategory) => {
    setHoveredSubCategory(subCategory);
  };

  const handleMouseLeaveSubCategory = () => {
    setHoveredSubCategory("");
  };

  return (
    <div
      className="relative underline decoration-transparent transition duration-100 ease-in-out hover:decoration-current "
      onClick={() => setIsDropdownOpen(true)}
      onDoubleClick={() => setIsDropdownOpen(false)}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      ACCESSORIES &#10097;
      {isDropdownOpen && (
        <div
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white xl:bg-opacity-50 xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-0 xl:w-[180px]"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Accessories mattress Protector Collections */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Mattress Protector Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Mattress Protector Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Mattress Protector
            {hoveredCategory === "Mattress Protector Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px]  xl:w-60   xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50 ">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Baffle-Box"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Baffle Box
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Sewn-Through"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Sewn Through
                            </Link>
                </div>  
                   
              </div>
            )}
          </div>

          {/* pillows Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Accessories Pillow Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Accessories Pillow Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Pillows
            {hoveredCategory === "Accessories Pillow Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/memory-foam"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Memory Foam
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/latex"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Latex
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/plush-foam"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Plush Foam
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/aloevera-fibre"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Aloevera & Fibre
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/PolyFibre-Textile"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              PolyFibre Textile
                            </Link>
                </div>
              </div>
            )}
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Accessories;