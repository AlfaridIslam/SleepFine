import React from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Desc1 from "../../assets/image4.jpg";
import Desc2 from "../../assets/image5.jpg";
import Desc3 from "../../assets/image6.jpg";

const Section3 = () => {
  return (
    <>
      <div className="container flex flex-col my-20">
        <div className="heading poppins-medium text-center text-5xl">
          OUR COLLECTIONS
        </div>
        <div className="description grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl mt-10">
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={Desc1}
              alt="Modern Statement"
              style={{ width: "300px", height: "300px" }}
              className="sm:w-[450px] sm:h-[450px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={Desc2}
              alt="The Essentials Collection"
              style={{ width: "300px", height: "300px" }}
              className="sm:w-[450px] sm:h-[450px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={Desc3}
              alt="Made-To-Order Jewelry"
              style={{ width: "300px", height: "300px" }}
              className="sm:w-[450px] sm:h-[450px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={Desc3}
              alt="Made-To-Order Jewelry"
              style={{ width: "300px", height: "300px" }}
              className="sm:w-[450px] sm:h-[450px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
