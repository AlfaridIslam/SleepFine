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
            <p className="text-xl">
              
              Sleep Fine Comfort Planet-Alwal 500010

            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243634.6393398494!2d78.30725502812498!3d17.4218033406113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9adb2cb190fb%3A0x95c1df25d34e0a85!2sSleepfine%20mattress!5e0!3m2!1sen!2sin!4v1725603986281!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Store 2 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100 ">
          <div className="address p-4 py-0">
            <p className="text-xl">
            Sleep Fine Comfort Planet-Ameerpet 500016

            </p>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.50046838643!2d78.45212687351685!3d17.435744383459728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1a55555533%3A0x1b432d909a97654c!2sSleepfine%20Comfort%20Planet!5e0!3m2!1sen!2sin!4v1725604306165!5m2!1sen!2sin"
              width="100%"
              height="240"
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" >
            </iframe> 

          </div>
        </div>

        {/* Store 3 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl">
            Sleep Fine Comfort Planet-Hafiz Baba Nagar 500005

            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8213321368667!2d78.48494917351331!3d17.324167583552313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba36d708d9087%3A0x3d2500d3fe49d789!2sSLEEP%20FINE%20COMFORT%20PLANET!5e0!3m2!1sen!2sin!4v1725604225657!5m2!1sen!2sin"
             width="100%" 
             height="240"
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade" >
            </iframe>
          </div>
        </div>

        {/* Store 4 */}
        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl">
            Sleep Fine Comfort Planet-Gajularamaram 500055
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.77123104035!2d78.43316447351951!3d17.518430683391248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fd5bc90cb1f%3A0x218a0672306c839c!2sGajularamaram%20Rd%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1725602823607!5m2!1sen!2sin" 
             width="100%" 
             height="240"
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade" >
            </iframe>
          </div>
        </div>
        {/* Store 5*/}

        <div className="rounded-2xl border-2 shadow opacity-1 pt-10 items-center justify-between p-6 w-full h-auto relative bg-slate-100">
          <div className="address p-4 py-0">
            <p className="text-xl">
            Sleep Fine Mattress Factory-Kompally - 500010.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15218.689267173717!2d78.495924!3d17.523149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85c89724427b%3A0x7df68edcf8e67783!2sSleep%20fine%20mattress%20Factory!5e0!3m2!1sen!2sin!4v1726658901039!5m2!1sen!2sin"
             width="100%" 
             height="240"
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade" >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstore;