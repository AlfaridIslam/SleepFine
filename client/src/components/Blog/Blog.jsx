import React from "react";

const Blog = () => {
  return (
    <div className="xl:max-w-2xl xl:mx-auto xl:p-6 :bg-white rounded-lg shadow-lg mt-10 sm:grid  sm:w-[150%] sm:justify-center sm:m-8 sm:p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Guide to Quality Sleep with Sleepfine Mattresses
      </h1>

      <div className="text-gray-700 text-lg leading-relaxed xl:text-pretty sm:text-pretty">
        <p className="mb-4">
          Choosing the right mattress can dramatically impact sleep quality, and
          <span className="font-semibold "> Sleepfine India</span> excels in
          offering innovative, comfortable, and durable options. Their product
          lineup includes orthopedic, memory foam, and hybrid mattresses, each
          designed to meet unique sleep needs and provide tailored support. With
          advanced cooling technology, Sleepfine mattresses regulate
          temperature, while hypoallergenic materials ensure a restful sleep
          environment, benefiting allergy-prone sleepers.
        </p>

        <p className="mb-4 ">
          Sleepfine mattresses are crafted for both residential and hospitality
          use, built to ensure longevity and comfort for a diverse range of
          sleepers. Whether you're looking for a
          <span className="font-semibold">
            {" "}
            king-size mattress (78x72 inches)
          </span>
          ,
          <span className="font-semibold">
            {" "}
            queen-size option (78x60 inches)
          </span>
          , or a{" "}
          <span className="font-semibold">
            single bed mattress (3 x 6 feet)
          </span>
          , Sleepfine has versatile options to meet various preferences.
        </p>

        <p className="mb-4 ">
          They even offer air beds with air pump functionality and waterproof
          mattress covers. To support customers further, Sleepfine provides an
          <span className="font-semibold"> old mattress exchange offer</span>,
          making it easy to transition to a better sleep experience.
        </p>
      </div>
    </div>
  );
};

export default Blog;
