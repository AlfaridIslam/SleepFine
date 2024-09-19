import { useState } from 'react';
import { Link } from 'react-router-dom';

const Beds = () => {
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
      BEDS &#10097;
      {isDropdownOpen && (
        <div
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white  xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-0 xl:w-[200px] "
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* king sized Beds collection */}
          <div
            className={`px-4 py-2  rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "King Size Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("King Size Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            
            King Size Bed
            {hoveredCategory === "King Size Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-[500]">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/platform-bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Platform Bed
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Panel-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Panel Bed
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Canopy-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Canopy Bed
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Sleigh-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Sleigh Bed
                            </Link>
                </div>      
              </div>
            )}
          </div>

          {/* Queen sized Beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Queen Size Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Queen Size Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Queen Size Bed
            {hoveredCategory === "Queen Size Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Murphy-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Murphy Bed
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Loft-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Loft Bed
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/Bunk-Bed"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Bunk Bed
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

export default Beds;