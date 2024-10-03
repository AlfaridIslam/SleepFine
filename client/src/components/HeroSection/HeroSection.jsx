import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const Video =
    "https://res.cloudinary.com/dpsmbluby/video/upload/v1727780873/herosection-video_pyansr.mp4";

  const Image =
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727780912/herosection-image_x6rrdk.jpg";

  return (
    <div className="relative h-screen w-[166%] xl:w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/20">
        {/* Video for xl screens only */}
        <div className="hidden xl:block h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image for screens smaller than xl */}
        <div className="block xl:hidden h-full">
          <img
            src={Image}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-[#e9d2ba] text-5xl xl:text-[60px] font-extrabold leading-tight xl:leading-[56px] mb-8 sm:mt-24 xl:mt-0 sm:px-4 xl:px-24">
          Trusted Mattress Innovators
          <br />
          for Homes and
          <br />
          Hospitality
        </h1>

        <button className="bg-[#e5e5e6] text-black font-bold text-xs py-4 px-9 flex items-center sm:mx-4 xl:mx-24">
          <Link to="/ourstores" className="flex items-center">
            <span>Get in touch with us</span>
            <span className="text-lg ml-2">&#8250;</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
