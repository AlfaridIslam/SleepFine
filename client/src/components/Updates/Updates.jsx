import React from "react";
import { Link } from "react-router-dom";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import news from "../../assets/news.jpg";
import ganeshimage from "../../assets/Ganesha-img.jpeg";
import DasaraVid from "../../assets/NewsUpdatesVid.mp4";

export const Updates = () => {
  return (
    <div className="xl:grid sm:grid">
      <div
        className="xl:text-center text-4xl poppins-medium xl:mt-20 xl:mb-10 xl:w-full xl:ml-0
                sm:mt-14 sm:ml-0 sm:text-3xl text-center"
      >
        News & Updates
      </div>

      <div
        className="container xl:rounded-2xl xl:border-2 xl:shadow xl:opacity-1 xl:flex 
               xl:items-center xl:justify-between xl:p-[135px] xl:w-[850px] xl:h-[200px] xl:ml-12 xl:relative xl:bg-slate-50 xl:mt-0
               sm:mt-10 sm:ml-[3rem] sm:shadow sm:bg-slate-50 sm:rounded-xl sm:opacity-1 sm:border-[3px] sm:w-[100%] sm:h-[360px]"
      >
        <div className="image xl:border-none xl:border-2 xl:p-15 xl:absolute xl:left-2">
          <video
            src={DasaraVid}
            autoPlay
            loop
            muted
            className="xl:rounded-xl xl:w-[450px] xl:h-[450px] sm:w-[314px] sm:h-[159px] sm:rounded-xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="content xl:flex-col xl:justify-center xl:space-y-9 xl:w-[284px] xl:p-[0.5rem] xl:absolute xl:left-96 xl:ml-[117px] xl:mt-[0.5rem]
                  sm:ml-[18px] sm:w-[262px] sm:mt-0 sm:relative sm:text-left"
        >
          <p className="poppins-light sm:text-sm sm:w-full sm:mt-6">
            ✨ Big Savings at Sleepfine! ✨ <br />
            Get your best night's sleep with up to 43% OFF on premium
            mattresses! 🛏️💤 Don't miss out on this limited-time offer to enjoy
            unbeatable comfort at dreamy prices! 💸🔥
            <br />
            <Link to="/ourstores" className="underline text-red-300">
              Hurry before the sale ends! 🕒👀
            </Link>{" "}
            ✨
          </p>

          <p className="font-thin text-[11px] sm:mt-2">27th oct, 2024</p>
        </div>
      </div>
    </div>
  );
};
