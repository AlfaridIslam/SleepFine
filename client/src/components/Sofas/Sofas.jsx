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
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white xl:bg-opacity-50 xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-2 xl:w-[150px]"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Sofas standard Collections  */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Orthopedic Bonded Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Orthopedic Bonded Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Standard Sofa
            {hoveredCategory === "Orthopedic Bonded Collection" && (
              <div className="xl:absolute xl:left-[150px] xl:-mt-[45px]  xl:w-60   xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium bg-white l:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/orthomed">chesterfield</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/preference">Lawson</Link>
                </div>  
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/preference">Tuxedo</Link>
                </div>     
              </div>
            )}
          </div>

          {/* sofas sectional Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Ortho Bonell Spring Collection" ? "bg-blue-700" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Ortho Bonell Spring Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Sectional Sofa
            {hoveredCategory === "Ortho Bonell Spring Collection" && (
              <div className="xl:absolute xl:left-[150px] xl:-mt-[45px] xl:w-60 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-silver-crown">Lshaped</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-oxford">Ushaped</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-oxford">Lshapedsofacumbed</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-oxford">Ushapedsofacumbed</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/6inch-oxford">Modular</Link>
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