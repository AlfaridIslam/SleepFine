import React from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Desc1 from "../../assets/image4.jpg";
import Desc2 from "../../assets/image5.jpg";
import Desc3 from "../../assets/image6.jpg";



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
              src={Desc1}
              alt="Modern Statement"
             
              className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4"
              
            />

          </div>
          <div >
            <img
              src={Desc2}
              alt="The Essentials Collection"
              className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4"
            />
          </div>
          <div >
            <img
              src={Desc3}
              alt="Made-To-Order Jewelry"
              className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4"
            />
          </div>
          <div >
            <img
              src={Desc3}
              alt="Made-To-Order Jewelry"
              className="xl:w-[300px] xl:h-[300px] sm:w-[500px] sm:h-[400px] xl:px-0 xl:ml-0 sm:px-5 sm:ml-4"
            />
          </div>
           </div>


    </div>
  )
    
}

export default Section3;
