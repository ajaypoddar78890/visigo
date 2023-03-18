import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { BiSearch } from "react-icons/bi";


const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video 
        className='w-full h-full object-cover'

         src={beachVid} 
         autoPlay
          loop
           muted/> 
           <div className='w-full h-full absolute top-0
            left-0 bg-gray-900/30 '></div>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>


                <h1>First Class Travel</h1>
                <h2 className='py-2'>top 1% locations Worldwide</h2>

                <form 
                className=' flex justify-between items-center max-w-[720px] mx-auto w-full border  p-1 rounded-md text-black bg-gray-100/90'
                >
                    <div>
                        <input className=' bg-transparent w-[300px] sm:w-[400px] focus:outline-none'
                         type="text" 
                            placeholder='Find Your Destination'
                         />
                    </div>
                    <div>
                        <BiSearch size={20} className='icon' style={{color:''}}/>
                    </div>
                    
                </form>
            </div>
    </div>
  )
}

export default Hero