import React, { useRef, useState } from "react";
import ArrowRight from "../../assets/right.png";
import ArrowLeft from "../../assets/left.png";
import {
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  HoveredImage4,
  HoveredImage5,
  HoveredImage6,
  HoveredImage7,
  HoveredImage8,
  HoveredImage9,
  HoveredImage10,
  HoveredImage11,
} from "../../assets/index.jsx";

const Section2 = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track hovered image
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true); // Track the start position

  const images = [
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];

  const hoveredImages = [
    HoveredImage4,
    HoveredImage5,
    HoveredImage6,
    HoveredImage7,
    HoveredImage8,
    HoveredImage9,
    HoveredImage10,
    HoveredImage11,
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
    <div className="relative sm:flex-col sm:justify-center sm:items-center sm:w-[683px] md:w-[1000px] lg:w-[1500px]">
      <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-20 my-7 flex-col">
        <div className="text-center flex-col justify-center items-center">
          <h1 className="xl:text-4xl md:text-3xl lg:text-2xl sm:text-xl font-sans">
            Exceptional Quality
          </h1>
          <p className="xl:font-thin xl:text-[16px] xl:mt-2 md:text-[12px] md:mt-2 md:font-thin lg:text-[12px] lg:mt-2 lg:font-thin sm:font-thin sm:text-[12px] sm:mt-2">
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
          className="flex gap-4 overflow-x-auto space-x-6 hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-[500px] flex-shrink-0 xl:w-[30%] sm:space-x-4 sm:w-[100%] md:w-[100%] lg:w-[100%]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredIndex === index ? hoveredImages[index] : img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 "
              />
              {hoveredIndex === index && (
                <div className="absolute bottom-0 w-full z-50 bg-black bg-opacity-50 text-white text-center py-2 opacity-90 transition-opacity cursor-pointer">
                  Know More
                </div>
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
