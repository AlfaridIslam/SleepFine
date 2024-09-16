import React, { useRef, useState } from "react";
import ArrowRight from "../../assets/right.png";
import ArrowLeft from "../../assets/left.png";
import {
  
ORTRHOMED6,
Romanticfirm6,
PlatformBed,
CanopyBed,
PanelBed,
SeighBed,
LoftBed,
MurphyBed,
ChesterfieldSofa,
LawsonSofa,
LshapedSofa,
UshapedSofa,
BaffelBox,
SewnThrough,
BodyPillow,
StandardPillow,
MemoryfoamPillow1,
MemoryfoamPillow2,
LshapedSofa1,
LshapedSofa2,
LshapedSofa4,
UshapedSofa1,
UshapedSofa2,
ModularSofa1,

} from "../../assets/index.jsx";
import { Link } from "react-router-dom";

const Section2 = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const images = [
    PlatformBed,
    CanopyBed,
    MurphyBed,
    LoftBed, 
    LshapedSofa1,
    UshapedSofa1,
    MemoryfoamPillow1,
    BaffelBox,


  ];
  const hoveredImages = [
    PanelBed,
    SeighBed,
    ORTRHOMED6,
    Romanticfirm6,
    ModularSofa1,
    UshapedSofa2,
    MemoryfoamPillow2,
    SewnThrough,
  ];

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + 1 >= maxScrollLeft);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    handleScroll();
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    handleScroll();
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative xl:flex xl:flex-col items-center w-full  sm:w-[158%] sm:h-full md:w-full lg:w-full">
      <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-20 my-7 flex flex-col items-center">
        <div className="text-center">
          <h1 className="xl:text-4xl md:text-3xl lg:text-3xl sm:text-3xl font-sans">
            Exceptional Quality
          </h1>
          <p className="font-thin text-[16px] mt-2">
            Soon-to-be staples in your rotation
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-4">
        {!isAtStart && (
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-10 p-2 bg-gray-800 rounded-full"
          >
            <img src={ArrowLeft} alt="Left Arrow" className="w-7 h-7" />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="xl:flex xl:gap-4 xl:overflow-x-auto xl:space-x-6 hide-scrollbar sm:flex sm:overflow-x-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative xl:h-[300px] xl:flex-shrink-0 xl:w-[30%] border-2 rounded-lg object-cover
              sm:h-[300px] sm:w-[50%] sm:flex-shrink-0 "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredIndex === index ? hoveredImages[index] : img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-fill transition-all duration-300"
              />
              {hoveredIndex === index && (
                <Link
                  to="/products"
                  className="absolute left-0 right-0 bottom-0 rounded-[4px] bg-black bg-opacity-50 text-white text-center py-2 transition-opacity cursor-pointer"
                >
                  Know More
                </Link>
              )}
            </div>
          ))}
        </div>
        {!isAtEnd && (
          <button
            onClick={scrollRight}
            className="absolute right-4 z-10 p-2 bg-gray-800 rounded-full"
          >
            <img src={ArrowRight} alt="Right Arrow" className="w-7 h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Section2;
