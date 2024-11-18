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
            <div className="w-full xl:w-1/2 aspect-[18/9]">
              <img
                src="https://res.cloudinary.com/dpsmbluby/image/upload/v1731652719/Guru_Nanak_Jayanti_Offer_post_dorr49.jpg"
                alt="Ambitious discount grunu nanak jayanti"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Content section */}
            <div className="w-full xl:w-1/2">
              <div className="space-y-4">
                <p className="poppins-light text-sm xl:text-base">
                  ✨ Celebrate Guru Nanak Jayanti with Sleepfine! ✨ In honor of
                  this special occasion, enjoy 35% off on our premium Orthopedic
                  Buckingham Mattress! 🛏️💤 Plus, get 2 free memory pillows with
                  your purchase for an extra touch of comfort. Don't miss out on
                  this limited-time offer to elevate your sleep experience at an
                  incredible value! 💸🔥
                  <br />
                  <Link to="/ourstores" className="underline text-red-300">
                    Hurry before the sale ends! 🕒👀
                  </Link>{" "}
                  ✨
                </p>
                <p className="font-thin text-[11px]">15th Nov, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
