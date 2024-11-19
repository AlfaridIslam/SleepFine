import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductsScrolling.css";
import {Link} from "react-router-dom";
import {ProductScrollingImages} from '../Cloudinary/ProductScrollingImages.jsx';

// mattresses images
// import Orthomed1 from "../../assets/ORTHOMED1.jpeg";
// import Orthomed2 from "../../assets/ORTHOMED2.jpeg";
// import Buckingham2 from "../../assets/buckingham2.jpeg";
// import Buckingham1 from "../../assets/buckingham1.jpeg";
// import aloeveralatex1 from "../../assets/aloeveralatex1.jpeg";
// import aloeveralatex2 from "../../assets/aloeveralatex2.jpeg";
// import eternity1 from "../../assets/eternity1.jpeg";
// import eternity2 from "../../assets/eternity2.jpeg";

// bed images
// import bed1 from "../../assets/Beds/King-Size-bed/CanopyBed.JPG";
// import bed2 from "../../assets/Beds/King-Size-bed/SleighBed.jpeg";
// import bed3 from "../../assets/Beds/King-Size-bed/PlatformBed.jpeg";
// import bed4 from "../../assets/Beds/King-Size-bed/PanelBed.jpeg";
// import bed5 from "../../assets/Beds/King-Size-bed/kingsizebed4.jpg";
// import bed6 from "../../assets/Beds/Queen-size-bed/LoftBed.jpg";
// import bed7 from "../../assets/Beds/King-Size-bed/Kingsizebed3.jpg";
// import bed8 from "../../assets/Beds/Queen-size-bed/MurphyBed.jpeg";
// sofa images
// import sofa1 from "../../assets/Sofas/Sectional-Sofas/Lshapedsofa1.jpeg";
// import sofa2 from "../../assets/Sofas/Sectional-Sofas/ModularSofa1.jpg";
// import sofa3 from "../../assets/Sofas/Sectional-Sofas/UshapedSofa1.jpeg";
// import sofa4 from "../../assets/Sofas/Sectional-Sofas/UshapedSofa4.jpeg";
// import sofa5 from "../../assets/Sofas/StandardSofas/chesterfield4.jpg";
// import sofa6 from "../../assets/Sofas/StandardSofas/chesterfield1.jpg";
// import sofa7 from  "../../assets/Sofas/StandardSofas/Tuxedo3.jpg";
// import sofa8 from "../../assets/Sofas/StandardSofas/Tuxedo1.jpg";
// accessories images
// import accessories1 from "../../assets/Accessories/Pillows/AloveraPolyfiberPillow2.jpeg";
// import accessories2 from "../../assets/Accessories/Pillows/AloveraPolyfiberPillow1.jpeg";
// import accessories3 from "../../assets/Accessories/Pillows/Memoryfoam_Pillow1.jpeg";
// import accessories4 from "../../assets/Accessories/Pillows/Memoryfoam_Pillow2.jpeg";
// import accessories5 from "../../assets/Accessories/Pillows/LatexPillow1.jpeg";
// import accessories6 from "../../assets/Accessories/Pillows/LatexPillow4.jpeg";
// import accessories7 from "../../assets/Accessories/Pillows/Foampillow11.png";
// import accessories8 from "../../assets/Accessories/Pillows/Foampillow2.jpeg";

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

    const mattressItems = [
      {
        image: ProductScrollingImages.orthomed1,
        hoverImage: ProductScrollingImages.orthomed2,
        link: "orthopedic_rebonded_orthomed_mattress",
      },
      {
        image: ProductScrollingImages.ambitious1,
        hoverImage: ProductScrollingImages.ambitious2,
        link: "ortho_bonnell_spring_ambitious_mattress",
      },
      {
        image: ProductScrollingImages.aloeveralatex1,
        hoverImage: ProductScrollingImages.aloeveralatex2,
        link: "orthopedic-rebonded-aloe-vera-latex-mattress",
      },
      {
        image: ProductScrollingImages.eternity1,
        hoverImage: ProductScrollingImages.eternity2,
        link: "pocketed-spring-6inch-eternity-euroton-mattress",
      },
    ];

  const bedItems = [
    {
      image: ProductScrollingImages.bed1, // Pass the image directly
      hoverImage: ProductScrollingImages.bed2, // Pass the hover image directly
      link: "denver-with-storage-and-without-storage-bed",
    },
  
    {
      image: ProductScrollingImages.bed5,
      hoverImage: ProductScrollingImages.bed6,
      link: "diamond-with-storage-and-without-storage-bed",
    },
    {
      image: ProductScrollingImages.bed3,
      hoverImage: ProductScrollingImages.bed4,
      link: "pkmodel-with-storage-and-without-storage-bed",
    },
    {
      image: ProductScrollingImages.bed7,
      hoverImage: ProductScrollingImages.bed8,
      link: "diamond-with-storage-and-without-storage-bed",
    },
  ];
  
  const sofaItems = [
    {
      image: ProductScrollingImages.sofa1,
      hoverImage: ProductScrollingImages.sofa2,
      link: "l-shaped-sofa",
    },
    {
      image: ProductScrollingImages.sofa3,
      hoverImage: ProductScrollingImages.sofa4,
      link: "u-shaped-sofa",
    },
    {
      image: ProductScrollingImages.sofa5,
      hoverImage: ProductScrollingImages.sofa6,
      link: "chesterfield_sofa",
    },
    {
      image: ProductScrollingImages.sofa7,
      hoverImage: ProductScrollingImages.sofa8,
      link: "tuxedo_sofa",
    },
  ];
  
  const accessoriesItems = [
    {
      image: ProductScrollingImages.accessories1,
      hoverImage: ProductScrollingImages.accessories2,
      link: "poly-fibre-pillow-accessories",
    },
    {
      image: ProductScrollingImages.accessories3,
      hoverImage: ProductScrollingImages.accessories4,
      link: "memory-pillow-accessories",
    },
    {
      image: ProductScrollingImages.accessories5,
      hoverImage: ProductScrollingImages.accessories6,
      link: "latexpillow_accessories",
    },
    {
      image: ProductScrollingImages.accessories7,
      hoverImage: ProductScrollingImages.accessories8,
      link: "foam-pillow-accessories",
    },
  ];
  

  return (
    <div className="mt-4 sm:justify-center sm:align-middle sm:items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 xl:w-full sm:w-[160%]  ">
      {/* ------------------Mattress------------------------- */}
      <div className="Beds">
        <h1 className="text-xl font-semibold text-center mb-4 mt-10">
          MATTRESSES
        </h1>
        <p className="font-thin text-[16px] mt-2 flex justify-center">
          Soon-to-be staples in your rotation
        </p>
        <div>
          <Slider {...settings} className="px-2">
            {mattressItems.map((item, index) => (
              <div
                className="relative group border-2 rounded-xl flex-shrink-0 w-64 xl:h-64 sm:h-[400px]"
                key={index}
              >
                {/* Main Image */}
                <img
                  src={item.image}
                  alt={`Bed ${index + 1}`}
                  className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full  rounded-xl"
                />

                {/* Hover Image */}
                <img
                  src={item.hoverImage}
                  alt={`Hover Bed ${index + 1}`}
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full  rounded-xl"
                />

                {/* Know More Text */}

                <Link to={`/product-details/${item.link}`}>
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

      {/* ------------------Beds------------------------- */}
      <div className="Beds">
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
                  className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full  rounded-xl"
                />

                {/* Hover Image */}
                <img
                  src={item.hoverImage}
                  alt={`Hover Bed ${index + 1}`}
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full  rounded-xl"
                />

                {/* Know More Text */}

                <Link to={`/product-details/${item.link}`}>
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
              <Link to={`/product-details/${item.link}`}>
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
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 w-full h-full  rounded-xl"
              />

              {/* Hover Image */}
              <img
                src={item.hoverImage}
                alt={`Hover Accessory ${index + 1}`}
                className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 w-full h-full  rounded-xl"
              />

              {/* Know More Text */}
              <Link to={`/product-details/${item.link}`}>
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