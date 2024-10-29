import React, { useState } from "react";
//import Logo from "../../assets/sleepfinelogo-3.png";
//import LogoImage from "../../assets/logo-image.png";
//import Ispflogo2 from '../../assets/ISPFlogo2.jpg';
//import { Link } from "react-router-dom";
//import ceritificatesLogo from "../../assets/certificate-logos.png";

const Section1 = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div
      className="xl:flex xl:flex-row xl:justify-center xl:items-center xl:bg-gray-100 xl:p-6 xl:gap-8 xl:w-full xl:mt-0
       sm:mt-4 sm:px-20 sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[158%] "
    >
      <div className="grid gap-5">

        <div className="image ">
          {/* Adjust image size dynamically based on content visibility */}
          {/* <img
            src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728366495/ISPFlogo2_ud1lcw.jpg"
            alt="Image"
            className={`${
              showFullContent
                ? "xl:w-[2600px] xl:h-[160px]"
                : "xl:w-[3000px] xl:h-[200px]"
            } transition-all duration-500`}
          /> */}
        </div>
        
        <div className="image ">
          {/* Adjust image size dynamically based on content visibility */}
          <img
           // src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728366520/logo-image_wxinpv.png"
           src="https://res.cloudinary.com/dpsmbluby/image/upload/v1729772005/coverphot011_wncnop.jpg"
            alt="Image"
            className={`${
              showFullContent
                ? "xl:w-[2600px] xl:h-[400px]"
                : "xl:w-[3000px] xl:h-[400px]"
            } transition-all duration-500`}
          />
        </div>
      </div>
      <div className="description xl:flex-col xl:justify-center xl:items-center xl:p-11 xl:mt-0">
        <p
          className="poppins-medium xl:text-center xl:text-4xl xl:mt-0
                           sm:text-2xl sm:mb-2 sm:text-center sm:mt-5"
        >
          Welcome to Sleep Fine, where rest meets innovation
        </p>
        <p className="poppins-regular xl:text-2xl xl:my-6 xl:px-0 sm:text-left sm:px-4">
          At Sleep Fine, we believe that a great night's sleep is the foundation
          of a fulfilling life. That's why we're dedicated to crafting
          exceptional mattresses that cradle your body and soothe your mind. Our
          journey began with a simple question: "What if a mattress could be
          both luxurious and affordable?"
        </p>
        <p className="sm:px-4 xl:px-0">
          <strong>Our Certificates & Awards</strong>
          <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1729062198/MEMBER_1_1_kgqjww.jpg" alt="" className="xl:h-48" />
        </p>
        <p className="poppins-light  xl:text-left xl:mt-0 sm:text-left sm:text-lg sm:mt-2 xl:px-0 sm:px-4">
          <strong>Our Story</strong>
          <br />
          Founded in the year 2006 by an experienced team of siblings as a
          family-owned business in the city Hyderabad, Telangana State, India.
          Sleep Fine is a sleep solutions company driven by a passion for
          innovation and a commitment to quality. Our team of experts combines
          cutting-edge technology with timeless craftsmanship to create
          mattresses that adapt to your unique needs.
        </p>
        {showFullContent ? (
          <>
            <p className="poppins-light mt-4">
              <strong>Our Mission</strong>
              <br />
              We're on a mission to transform the way you sleep, one mattress at
              a time. By prioritizing comfort, support, and sustainability, we
              aim to help you wake up feeling refreshed, renewed, and ready to
              take on the day.
            </p>
            <div className="poppins-light mt-4">
              <strong>Our Values</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>
                  <strong>Quality Obsession:</strong> We're relentless in our
                  pursuit of perfection, ensuring every mattress meets our
                  exceptionally high standards.
                </li>
                <li>
                  <strong>Sleep Democracy:</strong> We believe everyone deserves
                  a great night's sleep, regardless of budget or lifestyle.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously push the
                  boundaries of sleep technology to bring you the best possible
                  rest.
                </li>
                <li>
                  <strong>Sustainability:</strong> We're dedicated to
                  eco-friendly practices that minimize our impact on the planet.
                </li>
              </ul>
            </div>

            <p className="poppins-light mt-4">
              <strong>Join the Sleep Fine Family</strong>
              <br />
              When you choose Sleep Fine, you're not just buying a mattress –
              you're becoming part of a community that values rest, relaxation,
              and rejuvenation. Explore our collection today and discover a
              sleep experience that's simply... Fine with Sleep Fine.
            </p>
            <button
              className="text-blue-500 underline mt-2"
              onClick={toggleContent}
            >
              View Less
            </button>
          </>
        ) : (
          <button
            className="text-blue-800 underline mt-2 xl:flex xl:items-start "
            onClick={toggleContent}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Section1;
