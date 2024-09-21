import React, { useState, useEffect } from "react";
import Carousel1 from "../../assets/carousel1.jpg";
import Carousel2 from "../../assets/carousel2.jpg";
import Carousel3 from "../../assets/carousel3.jpg";

const slides = [
  {
    image: Carousel1,
    title: "Wide Range of Variety",
    description:
      "Sleep Fine Mattresses comes with varieties ranging from medical rebonded to Bonnell and Pocketed spring super soft.",
  },
  {
    image: Carousel2,
    title: "Quality Product",
    description:
      "Sleep Fine Mattresses is now the most widely accepted mattresses in India. ",
  },
  {
    image: Carousel3,
    title: "Research & Development",
    description:
      "Sleep Fine Mattresses has the best R&D setup for continuous product development",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative xl:w-full xl:h-[550px] sm:w-full sm:h-[550px]">
      <div
        className="relative xl:w-[100%] sm:w-[166%] sm:h-full bg-gray-200"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="xl:absolute inset-0 xl:font-bold xl:flex xl:flex-col xl:justify-center xl:items-center xl:text-center text-black xl:top-[0.5rem]
        sm:absolute sm:top-[12.5rem] sm:font-bold "
        >
          <h5 className="text-xl mb-2 xl:text-center sm:text-center">
            {slides[currentIndex].title}
          </h5>
          <p className="font-medium xl:text-center sm:text-center">
            {slides[currentIndex].description}
          </p>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
