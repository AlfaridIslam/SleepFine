import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image1.jpg";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export const Updates = () => {
  return (
    <>
      <div className="text-center text-4xl poppins-medium mt-20 mb-10">
        News & Updates
      </div>

      <div
        className="container rounded-2xl border-2 shadow opacity-1 flex 
      items-center justify-between p-[135px] w-[650px] h-[200px] ml-12 relative bg-slate-50"
      >
        <div className="image border-none border-2 p-15 absolute left-2">
          <img
            src={Image}
            alt="Image"
            style={{ width: "250px", height: "250px" }}
            className="rounded-xl"
          />
        </div>
        <div className="content flex-col  justify-center space-y-9 p-10 absolute left-46 ml-[96px]">
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
    </>
  );
};
