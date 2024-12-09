import React from 'react';
import Counter from './Counter';
import CouponGenerator from './CouponGenerator';

const OffersDisplay = () => {
  return (
    <div className='xl:w-full sm:w-[165%] '>
    
    <div className="relative">
      <h1 className="text-3xl font-serif flex justify-center  absolute inset-x-0 top-4">
        Hurry Up! Offer ends in
      </h1>
  
     
      <img
        src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728044249/Screenshot_2024-10-04_174643_gajhgn.png"
        alt="Offer Image"
        className="w-full xl:h-auto sm:h-[55vh]"
      />
      
     
      <div className="absolute inset-0 flex justify-center items-center  ">
        <div className="flex  items-center space-y-4 ">
          <div><Counter /></div>
          <div><CouponGenerator /></div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default OffersDisplay;