import React from "react";
import { Link } from "react-router-dom";
import DasaraVid from "../../assets/NewsUpdatesVid.mp4";

export const Updates = () => {
  return (
    <div className="xl:w-full px-4 py-8 xl:py-20 flex flex-col items-center sm:w-[165%]">
      <h2 className="text-3xl xl:text-4xl text-center poppins-medium mb-10">
        News & Updates
      </h2>

      <div className="xl:w-full sm:w-3/4 sm:flex sm:flex-col ">
        <div className="bg-slate-50 rounded-xl shadow border-2 p-4 xl:p-8 relative overflow-hidden">
          <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8">
            {/* Video container with consistent dimensions */}
            <div className="w-full xl:w-1/2 aspect-[18/9]">
              <img
                src="https://res.cloudinary.com/dpsmbluby/image/upload/v1734698085/newsand_update_vf0hef.jpg"
                alt="Orthopedic rebonded mattress"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Content section */}
            <div className="w-full xl:w-1/2">
              <div className="space-y-4">
                <p className="poppins-light text-sm xl:text-base">
                  ✨ Celebrate Christmas with Sleepfine! ✨ Upgrade your sleep
                  with our premium Memory Active mattress for unmatched support
                  and relaxation. 🛏🎄 🎁 Christmas Special: Enjoy exclusive
                  discounts + a FREE pillow with every mattress purchase! 🎉
                  Visit your nearest Sleepfine store today and give yourself the
                  gift of comfort this holiday season! 💤🎅 #MerryChristmas
                  #SleepfineComfort #HolidayRest
                  <br />
                  {/* <Link to="/ourstores" className="underline text-red-300">
                    Hurry before the sale ends! 🕒👀
                  </Link>{" "} */}
                  {/* ✨ */}
                </p>
                <p className="font-thin text-[11px]">21st Dec, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
