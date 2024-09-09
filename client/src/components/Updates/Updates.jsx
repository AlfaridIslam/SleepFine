import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image1.jpg";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export const Updates = () => {
  return (
    <div className="xl:grid sm:grid ">
      <div className="xl:text-center text-4xl poppins-medium xl:mt-20 xl:mb-10 xl:w-full xl:ml-0
                      sm:mt-14  sm:ml-40  sm:text-3xl">
        News & Updates
      </div>

      <div
        className="container xl:rounded-2xl xl:border-2 xl:shadow xl:opacity-1 xl:flex 
      xl:items-center xl:justify-between xl:p-[135px] xl:w-[650px] xl:h-[200px] xl:ml-12 xl:relative xl:bg-slate-50 xl:mt-0
       sm:mt-10 sm:shadow sm:bg-slate-50 sm:rounded-xl sm:opacity-1 sm:border-2 sm:w-[200px] "
      >

        
        <div className="image xl:border-none xl:border-2 xl:p-15 xl:absolute xl:left-2">
          <img
            src={Image}
            alt="Image"
           
            className="xl:rounded-xl xl:w-[250px] xl:h-[250px] xl:ml-0 xl:mr-0 sm:w-[180px] sm:h-[180px] sm:ml-[10px] sm:mr-[8px]  sm:rounded-xl"
          />
        </div>
        <div className="content xl:flex-col  xl:justify-center xl:space-y-9 xl:p-10 xl:absolute xl:left-46 xl:ml-[96px] xl:mt-0
                           sm:-mt-40 sm:ml-52 sm:w-96 sm:mb-10">
          <p className="poppins-light ">
            We're excited to announce the grand opening of our new store in
            Shahpur, Hyderabad! 🎉 Visit us to explore an exclusive range of
            products and experience exceptional service.{" "}
            <Link to="/updates" className="underline text-red-300">
              See you there!
            </Link>{" "}
            🛍️✨
          </p>

          <p className="font-thin text-[11px] mt-2">24th august, 2024</p>
        </div>
      </div>
    </div>
  );
};
