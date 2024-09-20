import { useState } from "react";
import { Link } from "react-router-dom";

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
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white  xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-0 xl:w-[180px] "
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* king sized Beds collection */}
          <div
            className={`px-4 py-2  rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "King Size bed Collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("King Size bed Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            King Size Bed
            {hoveredCategory === "King Size bed Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-40 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-[500]">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/king-with-storage">
                    With storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/king-without-storage">
                    Without Storage
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Queen sized Beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Queen Size bed Collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("Queen Size bed Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Queen Size Bed
            {hoveredCategory === "Queen Size bed Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-40 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/queen-with-storage">
                    With storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/queen-without-storage">
                    With Out storage
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* single sized beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Single bed Collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("Single bed Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Single Size Bed
            {hoveredCategory === "Single bed Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-40 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/Single-with-storage">
                    With Storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/Single-without-storage">
                    Without Storage
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Double Sized Beds Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Double bed Collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("Double bed Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Double size Bed
            {hoveredCategory === "Double bed Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-40 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/double-with-storage">
                    With Storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/double-without-storage">
                    Without Storage
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
