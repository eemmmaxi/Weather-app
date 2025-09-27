import React from 'react'
import { CiSearch } from "react-icons/ci";
import search from "../assets/images/icon-search.svg";



const Hero = () => {
  return (

    <div className="flex flex-col items-center justify-center text-center text-white mt-30 px-20 space-y-6">

        <h1 className="text-2xl font-semibold mt-10">
          How's the sky looking today?
        </h1>

        <div className='flex space-x-4 text-white'>

            <div className='flex items-center bg-[#1A1A3C] px-4 py-1 rounded-md space-x-2'>

                <img src={search} alt="search" className='h-4 w-4'/>

                <input 
                type="text" 
                placeholder='Search for a place...' 
                className='px-4 py-2 rounded-md bg-[#1A1A3C] focus:outline-none'/>

            </div>

            
            
            <button className='bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-800 transition'>Search</button>

        </div>


    </div>

  )
}

export default Hero
