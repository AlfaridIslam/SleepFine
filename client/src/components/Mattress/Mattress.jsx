import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mattress = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState("");

  const handleMouseEnterCategory = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeaveCategory = () => {
    setHoveredCategory("");
  };

  return (
    <div
      className="relative underline decoration-transparent transition duration-100 ease-in-out hover:decoration-current"
      onClick={() => setIsDropdownOpen(true)}
      onDoubleClick={() => setIsDropdownOpen(false)}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      MATTRESS &#10097;
      {isDropdownOpen && (
        <div
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white  xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:py-4 xl:w-[250px]"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Orthopedic Bonded Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Orthopedic Bonded Collection"
                ? ""  : ""
            }`}
            onClick={() => setHoveredCategory("Orthopedic Bonded Collection")}
            onDoubleClick={() => setHoveredCategory("")}
            onMouseEnter={() =>
              handleMouseEnterCategory("Orthopedic Bonded Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Orthopedic Bonded Collection
            {hoveredCategory === "Orthopedic Bonded Collection" && (
              <div className="xl:absolute xl:left-[250px] xl:-mt-10 xl:w-56 xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:bg-white xl:-z-50">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/orthomed">Orthomed</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/milange">Milange</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/preference">Preference</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/buckingham">Buckingham</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/buckingham-lexus">Buckingham Lexus</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/orthopedic-aloe-vera-latex">
                    Aloe-Vera With Latex
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/orthopedic-aloe-vera-memory">
                    Aloe-Vera With Memory
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100 z-20">
                  <Link to="product-details/memofy">Memofy</Link>
                </div>
              </div>
            )}
          </div>

          {/* Ortho Bonell Spring Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Ortho Bonell Spring Collection"
                ? ""  : ""
            }`}
            onClick={() => setHoveredCategory("Ortho Bonell Spring Collection")}
            onDoubleClick={() => setHoveredCategory("")}
            onMouseEnter={() =>
              handleMouseEnterCategory("Ortho Bonell Spring Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Ortho Bonell Spring Collection
            {hoveredCategory === "Ortho Bonell Spring Collection" && (
              <div className="xl:absolute xl:left-[250px]  xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50 xl:-mt-[45px]">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/the-hotel">The Hotel</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/oxford">Oxford</Link>
                </div>

                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/love-land-pillow-top">
                    LoveLand Pillow Top
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/romantic-euroton">
                    Romantic Euroton
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/ambitious">
                    Ambitious
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/ortho-bonnell-aloe-vera-with-latex">
                    Aloe-Vera With Latex
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/ortho-bonnell-aloe-vera-with-memory">
                    Aloe-Vera With Memory
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Pocketed Spring Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Pocketed Spring Collection"
                ? ""  : ""
            }`}
            onClick={() => setHoveredCategory("Pocketed Spring Collection")}
            onDoubleClick={() => setHoveredCategory("")}
            onMouseEnter={() =>
              handleMouseEnterCategory("Pocketed Spring Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            Pocketed Spring Collection
            {hoveredCategory === "Pocketed Spring Collection" && (
              <div className="xl:absolute xl:left-[250px] xl:-mt-[45px] xl:w-56 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-inspiration">
                    Inspiration
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-inspiration">
                    The Hotel Luxury
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-6inch-eternity-euroton">
                    Eternity-Euroton
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-aloe-vera-with-latex">
                    Aloe-Vera With Latex
                  </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/pocketed-spring-aloe-vera-with-memory">
                    Aloe-Vera With Memory
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* HR-PU Foam Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "HR-PU Foam Collection" ? "" : ""
            }`}
            onClick={() => setHoveredCategory("HR-PU Foam Collection")}
            onDoubleClick={() => setHoveredCategory("")}
            onMouseEnter={() =>
              handleMouseEnterCategory("HR-PU Foam Collection")
            }
            onMouseLeave={handleMouseLeaveCategory}
          >
            HR-PU Foam Collection
            {hoveredCategory === "HR-PU Foam Collection" && (
              <div className="xl:absolute xl:left-[250px] xl:-mt-[45px] xl:w-36 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium">
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/hr-pu-gravity">Gravity</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/hr-pu-space">Space</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/memory-active">Memory Active</Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                  <Link to="product-details/rose-by-rose">Rose By Rose</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mattress;
