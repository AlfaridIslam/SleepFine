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
    <div className="relative">
      <div className="flex justify-between mx-20 my-7">
        <div className="ml-[20px]">
          <h1 className="text-3xl font-sans">Exceptional Quality</h1>
          <p className="font-thin">Soon-to-be staples in your rotation</p>
        </div>
        <div className="flex justify-between gap-2 font-thin">
          <p className="underline">Spring Mattresses</p>
          <p>Medical Rebonded</p>
          <p>Super Soft</p>
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center p-12">
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
          className="flex overflow-x-auto space-x-6 hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-[500px] flex-shrink-0"
              style={{
                width: "30%", // Adjust this value to control the width of each image
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredIndex === index ? hoveredImages[index] : img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
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