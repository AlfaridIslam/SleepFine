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
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white  xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-4 xl:w-[200px] "
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* king sized Beds collection */}
          <div
            className={`px-4 py-2  rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Orthopedic Bonded Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Orthopedic Bonded Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            
            King Size Bed
            {hoveredCategory === "Orthopedic Bonded Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-[500]">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/orthomed">With storage</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/preference">Without Storage</Link>
                </div>      
              </div>
            )}
          </div>

          {/* Queen sized Beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Ortho Bonell Spring Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Ortho Bonell Spring Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Queen Size Bed
            {hoveredCategory === "Ortho Bonell Spring Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-silver-crown">With storage</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-oxford">With Out storage</Link>
                </div>
              </div>
            )}
          </div>

          {/* single sized beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Pocketed Spring Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Pocketed Spring Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Single Size Bed
            {hoveredCategory === "Pocketed Spring Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-inspiration">With Storage</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-6inch-eternity-euroton">
                    Without Storage
                  </Link>
                </div>
               
               
              </div>
            )}
          </div>

          {/* Double Sized Beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "HR-PU Foam Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("HR-PU Foam Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Double size Beds
            {hoveredCategory === "HR-PU Foam Collection" && (
              <div className="xl:absolute xl:left-[200px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/hr-pu-gravity">With Storage</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/hr-pu-space">Without Storage</Link>
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