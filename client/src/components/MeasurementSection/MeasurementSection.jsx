import React from 'react';
import {Link} from "react-router-dom"

const MeasurementSection = () => {
  return (
    <div className="flex  items-center justify-center xl:w-full  sm:w-[165%] p-4 gap-2">
     
    
      <video className="xl:w-full max-w-lg rounded-lg shadow-lg sm:w-96" autoPlay controls muted>
        <source
          src="https://res.cloudinary.com/dpsmbluby/video/upload/v1734674799/sleepfinemeasurement_huuroo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
     

      <div>
      <h1 className="text-2xl font-semibold  text-sky-500 mb-4 cursor-pointer ">
      <Link to="/measurement-video"> Perfect Fit Every Time</Link>
       
      </h1>
      <h1 className="text-2xl font-semibold  mb-4" >A Guide to Measuring Mattress Sizes</h1>
      <span className='font-serif'>Measuring your mattress ensures a perfect fit for your bed frame, bedding, and accessories. Whether it’s a king-size, queen-size, single and double mattress, accurate dimensions prevent mismatches and enhance comfort.</span>

      </div>
     
     
    </div>
  );
};

export default MeasurementSection;
