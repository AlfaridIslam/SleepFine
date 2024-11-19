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
          className="xl:absolute xl:grid xl:-left-2 xl:bg-white  xl:text-black xl:rounded-lg xl:shadow-lg  xl:mt-0 xl:font-bold xl:p-0 xl:w-[150px]"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Accessories mattress Protector Collections */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black ${
              hoveredCategory === "Mattress Protector Collection" ? "" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Mattress Protector Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Mattress Protector
            {hoveredCategory === "Mattress Protector Collection" && (
              <div className="xl:absolute xl:left-[145px] xl:-mt-[40px]  xl:w-56   xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50 bg-white">
                
                <div className="grid">
                <Link to="product-details/water_proof_mattress_protector_accessories" className="px-4 py-2 hover:bg-indigo-100">Water-Proof Protector</Link>
                <Link to="product-details/quilted-mattress-protector-accessories" className="px-4 py-2 hover:bg-indigo-100">Quilted protector</Link>
                
                </div>
                {/* <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/protector"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Water-Proof Protector
                            </Link>
                </div>
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/quilted-protector"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Quilted protector
                            </Link>
                </div>  
                <div className="px-4 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/fitted-protector"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Fitted Sheet Protector
                            </Link>
                </div>   */}
                   
              </div>
            )}
          </div>

          {/* pillows Collection */}
          <div
            className={`px-4 py-2 rounded-lg hover:bg-slate-200 hover:text-black ${
              hoveredCategory === "Accessories Pillow Collection" ? "" : ""
            }`}
            onMouseEnter={() => handleMouseEnterCategory("Accessories Pillow Collection")}
            onMouseLeave={handleMouseLeaveCategory}
          >
            Pillows
            {hoveredCategory === "Accessories Pillow Collection" && (
              <div className="xl:absolute xl:left-[150px] xl:-mt-[45px] xl:w-40 xl:bg-white xl:shadow-lg xl:rounded-md xl:pt-5 xl:font-medium xl:-z-50">
                
                <div className='grid'>
                <Link to="product-details/memory-pillow-accessories" className="px-4 py-2 hover:bg-indigo-100">Memory Pillow</Link>
                <Link to="product-details/latexpillow_accessories" className="px-4 py-2 hover:bg-indigo-100">Latex Pillow</Link>
                <Link to="product-details/foam-pillow-accessories"className="px-4 py-2 hover:bg-indigo-100">Foam Pillow</Link>  
                <Link to="product-details/poly-fibre-pillow-accessories" className="px-4 py-2 hover:bg-indigo-100">Poly Fibre Pillow</Link>          

                </div>

                {/* <div className="px-2 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/memory-pillow"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Memory Pillow
                            </Link>
                </div>
                <div className="px-2 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/latexpillow"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Latex Pillow
                            </Link>
                </div>
                <div className="px-2 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/foam-pillow"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Foam Pillow
                            </Link>
                </div>
                <div className="px-2 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/poly-fibre-pillow"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              Poly Fibre Pillow
                            </Link>
                </div> */}
                {/* <div className="px-2 py-2 hover:bg-indigo-100">
                <Link
                              to="product-details/PolyFibre-Textile"
                              className="px-4 py-2 hover:bg-indigo-100"
                            >
                              PolyFibre Textile
                            </Link>
                </div> */}
              </div>
            )}
          </div>
          <Link to="product-details/duvet-accessories">
          <div className="px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black">
           Duvets 
          </div>
          </Link>
          
          <Link to="product-details/comforters-accessories">
          <div className="px-4 py-2 rounded-lg hover:bg-slate-200  hover:text-black">
          Comforters 
          </div>
          </Link>
         
        </div>
      )}
    </div>
  );
};

export default Accessories;