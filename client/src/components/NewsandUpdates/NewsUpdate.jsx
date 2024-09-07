import React from "react";
import Sleep from "../../assets/sleep.jpg"

const NewsandUpdate=() => {
    return(
      <div className="ourstore-container">
      <div className="text-center text-4xl text-underline poppins-medium mt-20 mb-10 h-10">
        News and Updates
      <hr className=" mx-80" color="green" />
      </div>
     
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl ">
         {/* News 1 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative  bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-sm text-justify">
            <img
          className="w-full md:max-w-[450px] rounded-xl "
          src={Sleep}
          alt=""
        />
              
             The Sleepfine Mattress has also seen a significant price drop, now available for $1,695 instead of $2,095. Additionally, Cyber Monday deals are offering up to $500 off on various mattresses along with free bedding accessories. It’s a great time to invest in a new mattress if you’re looking for comfort and savings!

            </p>
           
          </div>
        </div>

        {/* News 2 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100 ">
          <div className="address p-4 py-0">
            <p className="text-sm text-justify">
            <img
          className="w-full md:max-w-[450px] rounded-xl"
          src={Sleep}
          alt=""
        />
            The Sleepfine Mattress has also seen a significant price drop, now available for $1,695 instead of $2,095. Additionally, Cyber Monday deals are offering up to $500 off on various mattresses along with free bedding accessories. It’s a great time to invest in a new mattress if you’re looking for comfort and savings!

            </p>
            
            

          </div>
        </div>

        {/* News 3 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-sm text-justify">
            <img
          className="w-full md:max-w-[450px] rounded-xl"
          src={Sleep}
          alt=""
        />
            
            The Sleepfine Mattress has also seen a significant price drop, now available for $1,695 instead of $2,095. Additionally, Cyber Monday deals are offering up to $500 off on various mattresses along with free bedding accessories. It’s a great time to invest in a new mattress if you’re looking for comfort and savings!
            </p>
            
          </div>
        </div>

        {/* News 4 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 poppins-medium items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-sm text-justify">
            <img
          className="w-full md:max-w-[450px] rounded-xl"
          src={Sleep}
          alt=""
        />
            The Sleepfine Mattress has also seen a significant price drop, now available for $1,695 instead of $2,095. Additionally, Cyber Monday deals are offering up to $500 off on various mattresses along with free bedding accessories. It’s a great time to invest in a new mattress if you’re looking for comfort and savings!
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsandUpdate