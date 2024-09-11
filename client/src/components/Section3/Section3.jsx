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
    <div className="w-full grid justify-center mt-6 px-4 lg:px-6">
      <div className="poppins-medium text-center mt-4 text-3xl lg:text-4xl xl:text-5xl">
        OUR COLLECTIONS
      </div>

      {/* -----images-div------ */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4 mb-4">
        <div>
          <img
            src={Banner1}
            alt="Modern Statement"
            className="w-full h-auto object-cover rounded-xl border-2"
          />
        </div>
        <div>
          <img
            src={Banner2}
            alt="The Essentials Collection"
            className="w-full h-auto object-cover rounded-xl border-2"
          />
        </div>
        <div>
          <img
            src={Banner3}
            alt="Oxford CI"
            className="w-full h-auto object-cover rounded-xl border-2"
          />
        </div>
        <div>
          <img
            src={Banner4}
            alt="Loveland CI"
            className="w-full h-auto object-cover rounded-xl border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
