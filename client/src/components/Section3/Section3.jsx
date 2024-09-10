import React from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Desc1 from "../../assets/image4.jpg";
import Desc2 from "../../assets/image5.jpg";
import Desc3 from "../../assets/image6.jpg";

const Section3 = () => {
  return (
    <div className="w-full xl:w-full xl:grid xl:justify-center xl:mt-0 sm:grid sm:justify-center sm:w-[141%] sm:mt-10">
      <div className="poppins-medium text-center xl:mt-4 xl:text-5xl sm:text-3xl sm:mt-4">
        OUR COLLECTIONS
      </div>

      {/* -----images-div------ */}
      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xl:gap-2 xl:mt-2 xl:mb-4 sm:mt-2 sm:px-4">
        <div className="flex justify-center">
          <img
            src={Desc1}
            alt="Modern Statement"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px]"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Desc2}
            alt="The Essentials Collection"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px]"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Desc3}
            alt="Made-To-Order Jewelry"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px]"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Desc3}
            alt="Made-To-Order Jewelry"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
