import React from "react";
import DSC02073 from "../../assets/mattress S.F COMP IMG/Romantic soft CI/DSC02073.jpg";
import DSC02096 from "../../assets/mattress S.F COMP IMG/Prefrence CI/DSC02096.jpg";
import DSC02159 from "../../assets/mattress S.F COMP IMG/PUFOAM 8/DSC02160.jpg";
import DSC02147 from "../../assets/mattress S.F COMP IMG/Loveland CI/DSC02147.jpg"
import DSC02117 from "../../assets/mattress S.F COMP IMG/Oxford CI/DSC02117.jpg"

const Section3 = () => {
  return (
    <div className="xl:grid xl:justify-center xl:mt-0 xl:w-full  sm:grid sm:justify-center sm:w-[141%]  sm:mt-10 ">
      <div className=" poppins-medium text-center  xl:mt-4 xl:text-5xl sm:text-3xl sm:mt-4">
        OUR COLLECTIONS
      </div>

      {/* -----images-div------ */}

      <div className="xl:flex  xl:gap-2 xl:mt-2 xl:mb-4 sm:grid sm:gap-4 sm:mt-2 sm:px-4 ">
        <div >
          <img 
            src={DSC02073}
            alt="Modern Statement"
            className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4  border-2 rounded-xl "
          />
        </div>
        <div>
          <img
            src={DSC02096}
            alt="The Essentials Collection"
            className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl object-cover "
          />
        </div>
        <div>
          <img
            src={DSC02117}
            alt="Made-To-Order Jewelry"
            className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl"
          />
        </div>
        <div>
          <img
            src={DSC02147}
            alt="Made-To-Order Jewelry"
            className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4 border-2 rounded-xl object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
