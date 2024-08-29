import React from "react";
import "./Testimonial.css";
import Tdata from "./Testimonial.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      // Responsive settings
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
    <div className="main-card mt-2">
      <div className="flex justify-around items-center mb-8">
        <h1 className="text-3xl font-serif text-slate-800">
          Just ask our well-rested customers
        </h1>
        <div className="border-t-2 border-pink-500 w-1/2 ml-4"></div>
      </div>

      <div className="px-10">
        <Slider {...settings}>
          {Tdata.map((item, index) => (
            <div className="px-3" key={index}>
              <div className="review-card bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-indigo-400 flex justify-center items-center h-56">
                  <img
                    src={item.image}
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
  );
}

export default Testimonial;
