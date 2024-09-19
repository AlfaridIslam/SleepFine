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

import Orthomed1 from "../../assets/ORTHOMED1.jpeg";
import Orthomed2 from "../../assets/ORTHOMED2.jpeg";
import Buckingham1 from "../../assets/buckingham1.jpeg";
import Buckingham2 from "../../assets/buckingham2.jpeg";
import aloeveralatex1 from "../../assets/aloeveralatex1.jpeg";
import aloeveralatex2 from "../../assets/aloeveralatex2.jpeg";
import oxford1 from "../../assets/oxford1.jpeg";
import oxford2 from "../../assets/oxford2.jpeg";
import romanticEuroton1 from "../../assets/romanticEuroton1.jpeg";
import romanticEuroton2 from "../../assets/romanticEuroton2.jpeg";
import eternity1 from "../../assets/eternity1.jpeg";
import eternity2 from "../../assets/eternity2.jpeg";
import inspiration1 from "../../assets/inspiration1.jpeg";
import inspiration2 from "../../assets/inspiration2.jpeg";
import gravity1 from "../../assets/gravity1.jpeg";
import gravity2 from "../../assets/gravity2.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const productData = [
    { id: "orthomed", image: Orthomed1, hoveredImage: Orthomed2 },
    { id: "buckingham", image: Buckingham1, hoveredImage: Buckingham2 },
    {
      id: "aloeveralatex",
      image: aloeveralatex1,
      hoveredImage: aloeveralatex2,
    },
    { id: "oxford", image: oxford1, hoveredImage: oxford2 },
    
  ];

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + 1 >= maxScrollLeft);
  };

 

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative xl:flex xl:flex-col items-center w-full sm:w-[158%] sm:h-full md:w-full lg:w-full">
      <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-20 my-7 flex flex-col items-center">
        <div className="text-center">
          <h1 className="poppins-medium text-5xl text-center md:text-3xl lg:text-3xl sm:text-3xl font-sans">
            Mattresses
          </h1>
          <p className="font-thin text-[16px] mt-2">
            Soon-to-be staples in your rotation
          </p>
        </div>
      </div>

      

      <div className="relative w-full flex justify-center items-center p-4 sm:p-8  xl:p-4">
       

        <div
         
        
          className="xl:flex xl:gap-2   sm:flex "
          
        >
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative xl:h-[300px] xl:flex-shrink-0 xl:w-[30%] border-2 rounded-lg object-cover sm:h-[300px] sm:w-[50%] sm:flex-shrink-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  hoveredIndex === index ? product.hoveredImage : product.image
                }
                alt={`Product ${index + 1}`}
                className="w-80 h-full object-fill transition-all duration-300"
              />
              {hoveredIndex === index && (
                <Link
                  to={`/product-details/${product.id}`}
                  className="absolute left-0 right-0 bottom-0 rounded-[4px] bg-black bg-opacity-50 text-white text-center py-2 transition-opacity cursor-pointer"
                >
                  Know More
                </Link>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Section2;
