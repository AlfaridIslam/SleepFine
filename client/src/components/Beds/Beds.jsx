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
          {/* Denver Model collection */}
          <div
            className={`px-4 py-2  rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Denver Model collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("Denver Model collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Denver Model
            {hoveredCategory === "Denver Model collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[45px] xl:w-[175px] xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-[500]">
                <div className="grid">
                   <Link to="product-details/denver-with-storage-and-without-storage-bed"className="px-4 py-4 hover:bg-indigo-100">With & Without Storage</Link>
                   {/* <Link to="product-details/denver-without-storage"className="px-4 py-2 hover:bg-indigo-100">Without Storage</Link> */}

                </div>
                
                {/* <div className="px-4 py-2 hover:bg-indigo-100">

                  <Link to="product-details/denver-with-storage">
                    With storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/denver-without-storage">
                    Without Storage
                  </Link>
                </div> */}
              </div>
            )}
          </div>

          {/* PK Model Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "PK Model Collection" ? "" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("PK Model Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            PK Model
            {hoveredCategory === "PK Model Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[40px] xl:w-[175px] xl:bg-white xl:shadow-lg xl:rounded-md  xl:font-medium xl:-z-50">

                <div className="grid">
                <Link to="product-details/pkmodel-with-storage-and-without-storage-bed"className="px-4 py-4 hover:bg-indigo-100">With & Without Storage</Link>
                {/* <Link to="product-details/pkmodel-without-storage"className="px-4 py-2 hover:bg-indigo-100"> With Out storage</Link> */}
                </div>
                {/* <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pkmodel-with-storage">
                    With storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pkmodel-without-storage">
                    With Out storage
                  </Link>
                </div> */}
              </div>
            )}
          </div>

          {/* Diamond model Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Diamond model Collection" ? "" : ""
            }`}
            onMouseEnter={() =>
              handleMouseEnterCategory("Diamond model Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Diamond Model
            {hoveredCategory === "Diamond model Collection" && (
              <div className="xl:absolute xl:left-[180px] xl:-mt-[30px] xl:w-[175px] xl:bg-white xl:shadow-lg xl:rounded-md  xl:font-medium xl:-z-50">
                <div className="grid">
                <Link to="product-details/diamond-with-storage-and-without-storage-bed"className="px-4 py-4 hover:bg-indigo-100">With & Without Storage </Link>
                {/* <Link to="product-details/diamond-without-storage"className="px-4 py-2 hover:bg-indigo-100">Without Storage </Link>    */}
                  
                  
                </div>
                {/* <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/diamond-with-storage">
                    With Storage
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/diamond-without-storage">
                    Without Storage
                  </Link>
                </div> */}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Beds;

