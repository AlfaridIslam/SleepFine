import React from "react";
import Logo from "../../assets/sleepfinelogo.jpeg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="flex justify-center items-center bg-gray-400 p-11 gap-11">
      <div className="image">
        <img src={Logo} alt="Image" className="w-[800px] h-[350px]" />
      </div>
      <div className="description flex-col justify-center items-center p-11">
        <p className="kalam-bold text-center text-5xl">
          The latest sensation in sleep innovation
        </p>
        <p className="kalam-regular text-2xl my-6">
          Having 20years of experience in bedding industry
        </p>
        <p className="font-medium">
          Sleep Fine is a one stop solution for all bedding requirements such as{" "}
          <br /> innerspring mattresses, Medical rebonded mattresses, Bonnell
          and Pocketed spring mattresses <br />, Head board & bases, Comforters
          and pillows.
        </p>
        <div className="flex items-center gap-1.5 cursor-pointer text-xs font-bold mt-9 border-2 bg-slate-500 text-white w-[150px] justify-center">
          <Link to = "/products" className="p-[14px]">View Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
