import React from "react";
import "./Testimonial.css";
import Tdata from "./Testimonial.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import all images statically
import img1 from "../../assets/Testimonial-Img/img-2.png";
import img2 from "../../assets/Testimonial-Img/img-1.png";
import img3 from "../../assets/Testimonial-Img/img-3.png";
import img4 from "../../assets/Testimonial-Img/img-4.png";
import img5 from "../../assets/Testimonial-Img/img-5.jpeg";
import img6 from "../../assets/Testimonial-Img/img-6.png";
import img7 from "../../assets/Testimonial-Img/img-7.png";
import img8 from "../../assets/Testimonial-Img/img-8.png";
import img9 from "../../assets/Testimonial-Img/img-9.png";
import img14 from "../../assets/Testimonial-Img/img-14.png";
import img12 from "../../assets/Testimonial-Img/img-12.png";
import img13 from "../../assets/Testimonial-Img/img-13.png"; // Import for Paul

// Map filenames to imported images
const imageMap = {
  "img-2.png": img2,
  "img-1.png": img1,
  "img-3.png": img3,
  "img-5.jpeg": img5,
  "img-6.png": img6,
  "img-7.png": img7,
  "img-4.png": img4,
  "img-8.png": img8,
  "img-9.png": img9,
  "img-14.png": img14,
  "img-12.png": img12,
  "img-13.png": img13,
};

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <div className="main-card mt-10 ">

      <div className="xl:flex xl:justify-around xl:items-center xl:mb-8 xl:w-full ">

      
        <h1 className="text-3xl font-serif text-slate-800 xl:ml-0 sm:ml-20">
          Just ask our well-rested customers
        </h1>
        <div className="xl:border-t-2 xl:border-pink-500 xl:w-1/2 xl:ml-4 xl:block sm:hidden"></div>
      </div>


      <div className=" xl:w-full xl:px-10 xl:ml-0 xl:mt-0 xl:mr-0 sm:-mr-20 sm:mt-8 ">

      <div className=" xl:w-full xl:px-10 xl:ml-0 xl:mt-0 xl:mr-0 sm:-mr-36 sm:mt-8   ">

        <Slider {...settings}>
          {Tdata.map((item, index) => (
            <div className="px-3" key={index}>
              <div className="review-card bg-white shadow-lg rounded-lg overflow-hidden xl:h-[500px] sm:h-[450px]">
                <div className="bg-indigo-400 flex justify-center items-center h-56">
                  <img
                    src={imageMap[item.image]} // Use the mapped image
                    alt={item.name}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400 mx-1"
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-center items-center p-6 text-center">
                  <p className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </p>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-gray-400 text-2xl mb-2"
                  />
                  <p className="text-gray-600 mb-2">{item.review}</p>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="text-gray-400 text-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
