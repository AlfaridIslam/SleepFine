import React from "react";
import DSC02073 from "../../assets/mattress S.F COMP IMG/Romantic soft CI/DSC02073.jpg";
import DSC02096 from "../../assets/mattress S.F COMP IMG/Prefrence CI/DSC02096.jpg";
import DSC02159 from "../../assets/mattress S.F COMP IMG/PUFOAM 8/DSC02160.jpg";
import DSC02147 from "../../assets/mattress S.F COMP IMG/Loveland CI/DSC02147.jpg";
import DSC02117 from "../../assets/mattress S.F COMP IMG/Oxford CI/DSC02117.jpg";

import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.JPG";
import Banner3 from "../../assets/banner3.JPG";
import Banner4 from "../../assets/banner4.JPG";

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
            src={Banner1}
            alt="Modern Statement"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Banner2}
            alt="The Essentials Collection"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Banner3}
            alt="Oxford CI"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Banner4}
            alt="Loveland CI"
            className="w-full h-full object-cover xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
