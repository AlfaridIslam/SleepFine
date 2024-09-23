import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductsScrolling.css";
import {Link} from "react-router-dom";
// bed images
import bed1 from "../../assets/Beds/King-Size-bed/CanopyBed.JPG";
import bed2 from "../../assets/Beds/King-Size-bed/SleighBed.jpeg";
import bed3 from "../../assets/Beds/King-Size-bed/PlatformBed.jpeg";
import bed4 from "../../assets/Beds/King-Size-bed/PanelBed.jpeg";
import bed5 from "../../assets/Beds/King-Size-bed/kingsizebed4.jpg";
import bed6 from "../../assets/Beds/Queen-size-bed/LoftBed.jpg";
import bed7 from "../../assets/Beds/King-Size-bed/Kingsizebed3.jpg";
import bed8 from "../../assets/Beds/Queen-size-bed/MurphyBed.jpeg";
// sofa images
import sofa1 from "../../assets/Sofas/Sectional-Sofas/Lshapedsofa1.jpeg";
import sofa2 from "../../assets/Sofas/Sectional-Sofas/ModularSofa1.jpg";
import sofa3 from "../../assets/Sofas/Sectional-Sofas/UshapedSofa1.jpeg";
import sofa4 from "../../assets/Sofas/Sectional-Sofas/UshapedSofa4.jpeg";
import sofa5 from "../../assets/Sofas/StandardSofas/chesterfield4.jpg";
import sofa6 from "../../assets/Sofas/StandardSofas/chesterfield1.jpg";
import sofa7 from  "../../assets/Sofas/StandardSofas/Tuxedo3.jpg";
import sofa8 from "../../assets/Sofas/StandardSofas/Tuxedo1.jpg";
// accessories images
import accessories1 from "../../assets/Accessories/Pillows/AloveraPolyfiberPillow2.jpeg";
import accessories2 from "../../assets/Accessories/Pillows/AloveraPolyfiberPillow1.jpeg";
import accessories3 from "../../assets/Accessories/Pillows/Memoryfoam_Pillow1.jpeg";
import accessories4 from "../../assets/Accessories/Pillows/Memoryfoam_Pillow2.jpeg";
import accessories5 from "../../assets/Accessories/Pillows/LatexPillow1.jpeg";
import accessories6 from "../../assets/Accessories/Pillows/LatexPillow4.jpeg";
import accessories7 from "../../assets/Accessories/Pillows/StandardPillow.jpeg";
import accessories8 from "../../assets/Accessories/Pillows/BodyPillow.jpeg";

const ProductsScrolling = () => {
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

  const bedItems = [
    {
      image: bed1, // Pass the image directly
      hoverImage: bed2, // Pass the hover image directly
    },
    {
      image: bed3,
      hoverImage: bed4,
    },
    {
      image: bed5,
      hoverImage: bed6,
    },
    {
      image: bed7,
      hoverImage: bed8,
    },
  ];
  
  const sofaItems = [
    {
      image: sofa1,
      hoverImage: sofa2,
    },
    {
      image: sofa3,
      hoverImage: sofa4,
    },
    {
      image: sofa5,
      hoverImage: sofa6,
    },
    {
      image: sofa7,
      hoverImage: sofa8,
    },
  ];
  
  const accessoriesItems = [
    {
      image: accessories1,
      hoverImage: accessories2,
    },
    {
      image: accessories3,
      hoverImage: accessories4,
    },
    {
      image: accessories5,
      hoverImage: accessories6,
    },
    {
      image: accessories7,
      hoverImage: accessories8,
    },
  ];
  

  return (
    <div className="mt-4 sm:justify-center sm:align-middle sm:items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 xl:w-full sm:w-[160%]  ">
      {/* ------------------Beds------------------------- */}
      <div className='Beds'>
      <h1 className="text-xl font-semibold text-center mb-4 mt-10">BEDS</h1>
      <p className="font-thin text-[16px] mt-2 flex justify-center">
        Soon-to-be staples in your rotation
      </p>
      <div>
      <Slider {...settings} className="px-2">
        {bedItems.map((item, index) => (
          <div
            className="relative group border-2 rounded-xl flex-shrink-0 w-64 xl:h-64 sm:h-[400px]"
            key={index}
          >
            {/* Main Image */}
            <img
              src={item.image}
              alt={`Bed ${index + 1}`}
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full object-cover rounded-xl"
            />

            {/* Hover Image */}
            <img
              src={item.hoverImage}
              alt={`Hover Bed ${index + 1}`}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full object-cover rounded-xl"
            />

            {/* Know More Text */}

            <Link to='product-details/king-with-storage'>

            <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
               
                Know More
              </span>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
      </div>
      </div>

      {/* -----------------------SOFAS-------------------------- */}

      <div className="sofas">
      <h1 className="text-xl font-semibold text-center mb-4 mt-10">SOFAS</h1>
      <p className="font-thin text-[16px] mt-2 flex justify-center">
        Soon-to-be staples in your rotation
      </p>
      <Slider {...settings} className="px-2">
        {sofaItems.map((item, index) => (
          <div
            className="relative group border-2 rounded-xl flex-shrink-0 w-64 xl:h-64 sm:h-[400px]"
            key={index}
          >
            {/* Main Image */}
            <img
              src={item.image}
              alt={`Sofa ${index + 1}`}
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full object-cover rounded-xl"
            />

            {/* Hover Image */}
            <img
              src={item.hoverImage}
              alt={`Hover Sofa ${index + 1}`}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full object-cover rounded-xl"
            />

            {/* Know More Text */}
            <Link to="product-details/Lawson">
            <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
                Know More
              </span>
            </div>
            </Link>
          </div>
        ))}
      </Slider>

      </div>

      {/* ----------------------ACCESSORIES----------------------------- */}

      <div className="accessories">
      <h1 className="text-xl font-semibold text-center mb-4 mt-10">
        ACCESSORIES
      </h1>
      <p className="font-thin text-[16px] mt-2 flex justify-center">
        Soon-to-be staples in your rotation
      </p>
      <Slider {...settings} className="px-2">
        {accessoriesItems.map((item, index) => (
          <div
            className="relative group border-2 rounded-xl flex-shrink-0 w-64 xl:h-64 sm:h-[400px]"
            key={index}
          >
            {/* Main Image */}
            <img
              src={item.image}
              alt={`Accessory ${index + 1}`}
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full object-cover rounded-xl"
            />

            {/* Hover Image */}
            <img
              src={item.hoverImage}
              alt={`Hover Accessory ${index + 1}`}
              className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full object-cover rounded-xl"
            />

            {/* Know More Text */}
            <Link to="product-details/memory-pillow">
            <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
                Know More
              </span>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default ProductsScrolling;
