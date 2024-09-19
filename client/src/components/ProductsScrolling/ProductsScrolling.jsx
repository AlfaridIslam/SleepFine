import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductsScrolling.css"

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

  // Add hover images
  const MattressesItems = [
    {
      image: "/src/assets/mattress S.F COMP IMG/ALOEVERA BONNEL/DSC02058.jpg",
      hoverImage: "/src/assets/mattress S.F COMP IMG/ALOEVERA BONNEL/DSC02061.jpg",
    },
    {
      image: "/src/assets/buckingham1.jpeg",
      hoverImage: "/src/assets/gravity1.jpeg",
    },
    {
      image: "/src/assets/aloeveralatex1.jpeg",
      hoverImage: "/src/assets/buckingham1.jpeg",
    },
    {
      image: "/src/assets/gravity1.jpeg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
  ];
  const bedItems = [
    {
      image: "/src/assets/Beds/King-Size-bed/CanopyBed.JPG",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
    {
      image: "/src/assets/Beds/Queen-size-bed/queensizebed2.jpg",
      hoverImage: "/src/assets/gravity1.jpeg",
    },
    {
      image: "/src/assets/Beds/King-Size-bed/PlatformBed.jpeg",
      hoverImage: "/src/assets/buckingham1.jpeg",
    },
    {
      image:"/src/assets/Beds/King-Size-bed/Kingsizebed1.jpg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
  ];
  const sofaItems = [
    {
      image: "/src/assets/Sofas/Sectional-Sofas/Lshapedsofa1.jpeg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
    {
      image: "/src/assets/Sofas/Sectional-Sofas/Lshapedsofa3.jpeg",
      hoverImage: "/src/assets/gravity1.jpeg",
    },
    {
      image:"/src/assets/Sofas/Sectional-Sofas/ModularSofa1.jpg",
      hoverImage: "/src/assets/buckingham1.jpeg",
    },
    {
      image:"/src/assets/Sofas/Sectional-Sofas/UshapedSofa1.jpeg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
  ];

  const accessoriesItems = [
    {
      image: "/src/assets/Accessories/Pillows/AloveraPolyfiberPillow1.jpeg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
    {
      image: "/src/assets/Accessories/Pillows/AloveraPolyfiberPillow2.jpeg",
      hoverImage: "/src/assets/gravity1.jpeg",
    },
    {
      image:"/src/assets/Accessories/Pillows/BodyPillow.jpeg",
      hoverImage: "/src/assets/buckingham1.jpeg",
    },
    {
      image:"/src/assets/Accessories/Pillows/Memoryfoam_Pillow1.jpeg",
      hoverImage: "/src/assets/aloeveralatex1.jpeg",
    },
  ];
  return (
    <div className="mt-4">

          {/* ------------------MAtresses------------------------- */}
        
    <h1 className="poppins-medium text-xl text-center  mt-10">MATTRESSES</h1>
    <p className="font-thin text-[16px] mt-2 flex justify-center">
            Soon-to-be staples in your rotation
          </p>
    
    <Slider {...settings} className="px-2"> {/* Add padding to the slider container */}
      {MattressesItems.map((item, index) => (
        <div
          className="relative group border-2 rounded-xl flex-shrink-0 w-64 h-64"
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
          <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
              Know More
            </span>
          </div>
        </div>
      ))}
    </Slider>

             
          {/* ------------------Beds------------------------- */}
               <h1 className="text-xl font-semibold text-center mb-4 mt-10">BEDS</h1>
               <p className="font-thin text-[16px] mt-2 flex justify-center">
            Soon-to-be staples in your rotation
          </p>
    <Slider {...settings} className="px-2"> {/* Add padding to the slider container */}
      {bedItems.map((item, index) => (
        <div
          className="relative group border-2 rounded-xl flex-shrink-0 w-64 h-64"
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
          <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
              Know More
            </span>
          </div>
        </div>
      ))}
    </Slider>

             {/* -----------------------SOFAS-------------------------- */}

             <h1 className="text-xl font-semibold text-center mb-4 mt-10">SOFAS</h1>
             <p className="font-thin text-[16px] mt-2 flex justify-center">
            Soon-to-be staples in your rotation
          </p>
    <Slider {...settings} className="px-2"> {/* Add padding to the slider container */}
      {sofaItems.map((item, index) => (
        <div
          className="relative group border-2 rounded-xl flex-shrink-0 w-64 h-64"
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
          <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
              Know More
            </span>
          </div>
        </div>
      ))}
    </Slider>

               {/* ----------------------ACCESSORIES----------------------------- */}

               <h1 className="text-xl font-semibold text-center mb-4 mt-10">ACCESSORIES</h1>
               <p className="font-thin text-[16px] mt-2 flex justify-center">
            Soon-to-be staples in your rotation
          </p>
    <Slider {...settings} className="px-2"> {/* Add padding to the slider container */}
      {accessoriesItems.map((item, index) => (
        <div
          className="relative group border-2 rounded-xl flex-shrink-0 w-64 h-64"
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
          <div className="absolute inset-0 flex items-end justify-center text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <span className="text-white bg-black bg-opacity-50 px-2 py-2 rounded-lg w-full justify-center items-center">
              Know More
            </span>
          </div>
        </div>
      ))}
    </Slider>






  </div>
  
  
  
  );
};

export default ProductsScrolling;
