import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sofas = () => {
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
      SOFAS &#10097;
      {isDropdownOpen && (
        <div
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white xl:bg-opacity-50 xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-0 xl:w-[150px]"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Sofas standard Collections  */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Standard Sofa Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Standard Sofa Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Standard Sofa
            {hoveredCategory === "Standard Sofa Collection" && (
              <div className="xl:absolute xl:left-[150px] xl:-mt-[45px]  xl:w-60   xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium bg-white l:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Chesterfield"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Chesterfield
                            </Link>
                 
                
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                    to="product-details/Lawson"
                    className="px-4 py-2 hover:bg-indigo-100"
                 >
                   Lawson
                </Link>
                </div>  
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                    to="product-details/Tuxedo"
                    className="px-4 py-2 hover:bg-indigo-100"
                >
                  Tuxedo
                </Link>
                </div>     
              </div>
            )}
          </div>

          {/* sofas sectional Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Sectional Sofa Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Sectional Sofa Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Sectional Sofa
            {hoveredCategory === "Sectional Sofa Collection" && (
              <div className="xl:absolute xl:left-[150px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/L-Shaped"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              L-Shaped
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/U-Shaped"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              U-Shaped
                            </Link>
                </div>
                
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Modular"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Modular
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

export default Sofas;