import React, { useState } from "react";
import Logo from "../../assets/sleepfinelogo-3.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="xl:flex xl:justify-center xl:items-center xl:bg-gray-100 xl:p-6 xl:gap-8 xl:w-full xl:mt-0
                      sm:w-[140%] sm:mt-4  ">
      <div className="image ">
        {/* Adjust image size dynamically based on content visibility */}
        <img 
          src={Logo}
          alt="Image"
          className={`${
            showFullContent ? "xl:w-[2600px] xl:h-[200px]" : "xl:w-[3000px] xl:h-[250px]"
          } transition-all duration-500  sm:pl-[5rem] sm:pr-[1rem] sm:h-40 `}
        />
      </div>
      <div className="description xl:flex-col xl:justify-center xl:items-center xl:p-11 xl:mt-0 
                           sm:mt-6 sm:p-5">
        <p className="poppins-medium xl:text-center xl:text-4xl
                           sm:text-2xl sm:mb-2">
          Welcome to Sleep Fine, where rest meets innovation
        </p>
        <p className="poppins-regular xl:text-2xl xl:my-6">
          At Sleep Fine, we believe that a great night's sleep is the foundation
          of a fulfilling life. That's why we're dedicated to crafting
          exceptional mattresses that cradle your body and soothe your mind. Our
          journey began with a simple question: "What if a mattress could be
          both luxurious and affordable?"
        </p>
        <p className="poppins-light">
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
            <p className="poppins-light mt-4">
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
            </p>
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
            className="xl:text-blue-800 xl:underline mt-2"
            onClick={toggleContent}
          >
            View More
          </button>
        )}
        <div className="xl:flex xl:items-center xl:gap-1.5 xl:cursor-pointer xl:text-xs font-bold xl:mt-9 xl:border-2 xl:rounded-none xl:bg-gray-500 xl:text-white xl:w-[150px] xl:justify-center
                             sm:rounded-full sm:bg-orange-400 sm:w-36 sm:p-[8px] sm:pl-[17px] sm:items-center sm:ml-[13rem] sm:h-10">
          <Link to="/products" className="p-[1px]">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
