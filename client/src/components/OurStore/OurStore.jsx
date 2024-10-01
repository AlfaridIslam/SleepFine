import React from "react";

 const Ourstore = () => {
  return (
    <div className="ourstore-container  xl:justify-center sm:grid sm:justify-center   xl:w-full sm:w-[158%]">
      <div className=" poppins-medium xl:text-3xl xl:flex xl:justify-center xl:ml-0 xl:p-8 xl:underline sm:text-2xl sm:flex sm:justify-center sm:mt-10 sm:p-5  sm:underline">
        OUR STORES
      </div>

      <div className="xl:grid xl:grid-cols-2 xl:gap-8 xl:px-10 xl:w-full  sm:w-[100%] sm:px-10 sm:grid sm:gap-8 sm:justify-center ">
        {/* Store 1 */}

        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl underline">Sleep Fine Comfort Planet-Alwal 500010</p>
            <a href="https://maps.app.goo.gl/d32jCdNqCPhv4e3y8"  target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1727759140/Screenshot_2024-10-01_103447_lrswqt.png" alt="" className="w-[100%] h-80"/>

            </a>
          
          </div>
        </div>

        {/* Store 2 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100 ">
          <div className="address p-4 py-0">
            <p className="text-xl underline">Sleep Fine Comfort Planet-Ameerpet 500016</p>
            <a href="https://maps.app.goo.gl/zcmixDarWiAidU7P8"  target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1727763389/Screenshot_2024-10-01_114512_y53hks.png" alt=""  className="w-[100%] h-80"/>

            </a>
          </div>
        </div>

        {/* Store 3 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl underline">
              Sleep Fine Comfort Planet-Hafiz Baba Nagar 500005
            </p>
            <a href="https://maps.app.goo.gl/VSoBpCkdKkHKb4nr6"  target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1727763795/Screenshot_2024-10-01_115241_a1fg99.png" alt="" className="w-[100%] h-80" />

            </a>
          </div>
        </div>

        {/* Store 4 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl underline">
              Sleep Fine Comfort Planet-Gajularamaram 500055
            </p>

            <a href="https://maps.app.goo.gl/eHfFF396ZcEirC9Q9"  target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1727763993/Screenshot_2024-10-01_115555_znh53n.png" alt=""  className="w-[100%] h-80" />

            </a>
          </div>
        </div>
        {/* Store 5*/}

        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl underline">
              Sleep Fine Mattress Factory-Kompally - 500010.
            </p>
            <a href="https://maps.app.goo.gl/hAFiRCuHUxYCcntb9"  target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1727764413/Screenshot_2024-10-01_120242_bkm6ku.png" alt="" className="w-[100%] h-80" />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstore;