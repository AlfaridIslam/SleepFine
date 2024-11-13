import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay

  // Old video with the small girl
  // this one is pexel video(short one )
  // const Video =
  //   "https://res.cloudinary.com/dpsmbluby/video/upload/v1727780873/herosection-video_pyansr.mp4";

  // Diwali video
  // const DiwaliVideo =
  //   "https://res.cloudinary.com/dpsmbluby/video/upload/v1729078661/HAPPY_DUSSEHRE_DIWALI_2_cvtvka.mp4";

  const Video =
    "https://res.cloudinary.com/dpsmbluby/video/upload/v1728044969/Carouselvid_nmtw6q.mp4";
  const Image =
    "https://res.cloudinary.com/dpsmbluby/image/upload/v1727780912/herosection-image_x6rrdk.jpg";

  useEffect(() => {
    const initializeVideo = async () => {
      try {
        if (videoRef.current) {
          // Always start muted to ensure autoplay works
          videoRef.current.muted = true;
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Video playback error:", error);
        setIsPlaying(false);
      }
    };

    initializeVideo();
  }, []);

  const handleVolumeToggle = async () => {
    if (!videoRef.current) return;

    try {
      if (isMuted) {
        // Attempting to unmute
        videoRef.current.muted = false;
        // Try to play if it was paused
        if (videoRef.current.paused) {
          await videoRef.current.play();
        }
        setIsMuted(false);
      } else {
        // Muting
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    } catch (error) {
      console.error("Error toggling volume:", error);
      // If unmuting fails, keep it muted
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="relative h-screen w-[166%] xl:w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20">
        <div className="hidden xl:block xl:h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-[100%] object-fill"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Volume control button */}
          <button
            onClick={handleVolumeToggle}
            className="absolute top-4 left-4 bg-white/90 hover:bg-white py-2 px-4 rounded-full 
                     transition-all duration-300 ease-in-out transform hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <FontAwesomeIcon
              icon={isMuted ? faVolumeMute : faVolumeUp}
              className="text-black text-lg"
            />
          </button>
        </div>

        <div className="block xl:hidden h-full">
          <img
            src={Image}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative container mx-auto xl:mt-[10rem] sm:mt-8 px-4">
        <h1 className="text-[#e9d2ba] text-5xl xl:text-[60px] font-extrabold leading-tight xl:leading-[56px] mb-8 xl:mt-0 sm:px-4 xl:px-24 sm:mt-[-1rem]">
          <img
            src="https://res.cloudinary.com/dpsmbluby/image/upload/v1729065419/SleepFine_R_2_1_u2lg4f.png"
            alt="sleepfine"
            className="absolute xl:-top-[120px] xl:left-[75px] sm:-top-[44px] xl:h-60 sm:left-[15px] md:-top-[91px] md:right-[59px] lg:-top-[174px] lg:right-[119px]"
          />
          <br />
          Trusted Mattress Innovators
          <br />
          for Homes and
          <br />
          Hospitality
        </h1>

        <button
          className="bg-[#e5e5e6] text-black font-bold text-xs py-4 px-9 flex items-center sm:mx-4 xl:hidden 
                     hover:bg-[#d5d5d6] transition-colors duration-300"
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