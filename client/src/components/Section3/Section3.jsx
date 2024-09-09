import React from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Desc1 from "../../assets/image4.jpg";
import Desc2 from "../../assets/image5.jpg";
import Desc3 from "../../assets/image6.jpg";

const Section3 = () => {
  return (
    <div className="container flex flex-col items-center my-20">
      <div className="heading poppins-medium text-center text-5xl mb-4">
        OUR COLLECTIONS
      </div>
      <div className="description flex justify-center items-center gap-6 flex-wrap">
        <img
          src={Desc1}
          alt="Modern Statement"
          className="w-[100px] h-[300px] sm:w-[450px] sm:h-[450px]"
        />
        <img
          src={Desc2}
          alt="The Essentials Collection"
          className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]"
        />
        <img
          src={Desc3}
          alt="Made-To-Order Jewelry"
          className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]"
        />
        <img
          src={Desc3}
          alt="Made-To-Order Jewelry"
          className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]"
        />
      </div>
    </div>
  );
};

export default Section3;
