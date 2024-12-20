import React,{useState , useEffect} from 'react';


const Counter =()=>{



    const endTime = new Date('December 31, 2024 00:00:00').getTime();

    const [currentTime ,setCurrentTime] =useState(new Date().getTime());
    const gap = endTime - currentTime ;


    const seconds =1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours* 24;
    
    const remainingDays = Math.floor( gap/days);
    const remainingHours = Math.floor( (gap% days)/hours);
    const remainingMinutes = Math.floor( (gap% hours)/minutes);
    const remainingSeconds = Math.floor( (gap% minutes)/seconds);


    useEffect(()=>{

        setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
    },[currentTime])



    return(
       <div className='relative'>
     
        {/* clock image */}
        <img src="https://res.cloudinary.com/dpsmbluby/image/upload/v1728045494/timer-11_nfniu1.png" alt="img"  className='w-[550px] '/>
      
        {/* Second Main Div positioned absolutely */}
        <div className='absolute inset-0  xl:flex  justify-center items-center xl:gap-3  xl:top-24 -left-[13%] sm:grid   ' >

           {/* day div */}
   <div>
          <div className='text-center xl:bg-gradient-to-r from-lime-900 xl:p-5  rounded-md xl:mt-0 sm:mt-[65px]   '>
            <h1 className='xl:text-5xl font-extrabold sm:text-5xl'>{remainingDays}</h1>
            <h2 className='animate-bounce'>DAYS</h2>
          </div>
    </div>


    {/* time divs */}

    <div className='xl:flex xl:mt-0 sm:flex sm:-mt-36'>
          <div className='text-center bg-gradient-to-r from-indigo-600 xl:p-2  rounded-md  '>
            <h1 className='xl:text-4xl sm:text-sm font-semibold'>{remainingHours}</h1>
            <h2>hours</h2>
          </div>
      
          <div className='text-center bg-gradient-to-r from-indigo-400 xl:p-2 rounded-md'>
            <h1 className='xl:text-4xl sm:text-sm font-semibold'>{remainingMinutes}</h1>
            <h2>minutes</h2>
          </div>
      
          <div className='text-center bg-gradient-to-r from-indigo-400 xl:p-2 rounded-md  '>
            <h1 className='xl:text-4xl sm:text-sm font-semibold'>{remainingSeconds}</h1>
            <h2>seconds</h2>
          </div>
    </div>

     </div>   
      </div>
      
    );
}


export default Counter;