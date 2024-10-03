import React from "react";
import { Link } from "react-router-dom";
import DasaraVid from "../../assets/NewsUpdatesVid.mp4";

export const Updates = () => {
  return (
    <div className="w-full px-4 py-8 xl:py-20">
      <h2 className="text-3xl xl:text-4xl text-center poppins-medium mb-10">
        News & Updates
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-xl shadow border-2 p-4 xl:p-8 relative overflow-hidden">
          <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
            {/* Video container with consistent dimensions */}
            <div className="w-full xl:w-1/2 aspect-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src={DasaraVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Content section */}
            <div className="w-full xl:w-1/2">
              <div className="space-y-4">
                <p className="poppins-light text-sm xl:text-base">
                  ✨ Big Savings at Sleepfine! ✨ <br />
                  Get your best night's sleep with up to 43% OFF on premium
                  mattresses! 🛏️💤 Don't miss out on this limited-time offer to
                  enjoy unbeatable comfort at dreamy prices! 💸🔥
                  <br />
                  <Link to="/ourstores" className="underline text-red-300">
                    Hurry before the sale ends! 🕒👀
                  </Link>{" "}
                  ✨
                </p>
                <p className="font-thin text-[11px]">27th oct, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
