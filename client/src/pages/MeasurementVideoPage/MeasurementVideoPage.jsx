import React from 'react'


const MeasurementVideoPage = () => {
  return (
    <div>
    <div className="flex flex-col  items-center justify-center xl:w-full  sm:w-[165%] p-4 gap-2">

    <div>
    <h1 className="text-2xl font-semibold text-center  text-sky-500 mb-4 ">
      Perfect Fit Every Time
    </h1>
    <h1 className="text-2xl font-semibold  mb-4 text-center" >A Guide to Measuring Mattress Sizes</h1>
    <span className='font-serif text-center'>Measuring your mattress ensures a perfect fit for your bed frame, bedding, and accessories. Whether it’s a king-size, queen-size, single and double mattress, accurate dimensions prevent mismatches and enhance comfort.</span>

    </div>
     
    <video className="  rounded-lg shadow-lg w-[520%] h-screen" autoPlay controls muted>
      <source
        src="https://res.cloudinary.com/dpsmbluby/video/upload/v1734674799/sleepfinemeasurement_huuroo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

   
   
   
  </div>
    </div>
  )
}

export default MeasurementVideoPage
