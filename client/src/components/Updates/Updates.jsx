import React from "react";
import { Link } from "react-router-dom";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import news from "../../assets/news.jpg";
import ganeshimage from "../../assets/Ganesha-img.jpeg";
import DasaraVid from "../../assets/NewsUpdatesVid.mp4";

export const Updates = () => {
  return (
    <div className="xl:grid sm:grid">
      <div className="xl:text-center text-4xl poppins-medium xl:mt-20 xl:mb-10 xl:w-full xl:ml-0 sm:mt-14 sm:ml-0 sm:text-3xl text-center">
        News & Updates
      </div>

      <div
        className="container rounded-xl xl:border-2 xl:shadow xl:opacity-1 xl:flex 
             xl:items-center xl:justify-between xl:p-[135px] xl:max-w-[800px] xl:h-[200px] xl:ml-12 xl:relative xl:bg-slate-50 xl:mt-0
             sm:mt-10 sm:mx-auto sm:ml-12 sm:shadow sm:bg-slate-50 sm:opacity-1 sm:border-[3px] sm:h-auto sm:max-w-[700px] sm:p-4"
      >
        <div className="image xl:border-none xl:border-2 xl:p-15 xl:absolute xl:left-2 sm:static sm:mb-4">
          <video
            src={DasaraVid}
            autoPlay
            loop
            muted
            className="rounded-xl xl:w-[450px] xl:h-[450px] sm:w-full sm:h-auto"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="content xl:flex-col xl:justify-center xl:space-y-9 xl:w-[284px] xl:p-[0.5rem] xl:absolute xl:left-96 xl:ml-[117px] xl:mt-[0.5rem]
                sm:w-full sm:mt-4 sm:ml-0 sm:static sm:text-left"
        >
          <p className="poppins-light sm:text-sm sm:w-full">
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
