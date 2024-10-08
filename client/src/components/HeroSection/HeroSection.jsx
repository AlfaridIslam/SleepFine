import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons"; // Import mute and unmute icons
import SleepFineR from "../../assets/SleepFine_R.png";

const HeroSection = () => {
  const [videoMusic, setVideoMusic] = useState(false); // Initially unmuted (sound plays)

  // handling (toggling mute/unmute)
  // const handleMusic = () => {
  //   setVideoMusic(!videoMusic);
  // };

  // company video
  // const Video =
  //   "https://res.cloudinary.com/dpsmbluby/video/upload/v1728044969/Carouselvid_nmtw6q.mp4";

  // this one is pexel video(short one )
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
            // muted={videoMusic} // Controlled by videoMusic state (unmuted initially)
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute button with Font Awesome icons */}
          {/* <button
            onClick={handleMusic}
            className="absolute top-4 left-4 bg-white py-[1px] px-4 rounded-full"
          >
            <FontAwesomeIcon
              icon={videoMusic ? faVolumeMute : faVolumeUp} // Toggle icons based on state
              className="text-[15px]"
            />
          </button> */}
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
      <div className="relative z-10 container mx-auto xl:mt-[10rem] sm:mt-8 px-4">
        <h1
          className="text-[#e9d2ba] text-5xl xl:text-[60px] font-extrabold leading-tight xl:leading-[56px] mb-8  xl:mt-0
         sm:px-4 xl:px-24 sm:mt-[-1rem]"
        >
          {/* SleepFine<sup className="top-[-30px] text-[14px]">(R)</sup> */}
          <img
            src={SleepFineR}
            alt="sleepfine"
            className="absolute xl:-top-[162px] xl:right-[331px] sm:-top-[44px] sm:right-[28px]
             md:-top-[91px] md:right-[59px] lg:-top-[174px] lg:right-[119px]"
          />
          <br />
          Trusted Mattress Innovators
          <br />
          for Homes and
          <br />
          Hospitality
        </h1>

        <button
          className="bg-[#e5e5e6] text-black font-bold text-xs py-4 px-9 flex items-center sm:mx-4 xl:mx-24"
          aria-label="Get in touch with us"
          role="button"
        >
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
