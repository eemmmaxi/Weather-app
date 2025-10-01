import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import search from "../assets/images/icon-search.svg";



const Hero = ( { searchTerm, setSearchTerm } ) => {

   const [inputValue, setInputValue] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    setSearchTerm(inputValue); // only update when button clicked
  };
  

  return (

    <div className="flex flex-col items-center justify-center text-center text-white px-20 max-md:px-10 max-sm:px-10 space-y-6">

        <h1 className="font-bricolage font-bold text-5xl max-sm:text-2xl tracking-tight mt-40">
          How's the sky looking today?
        </h1>

        {/** search bar */}

        <form onSubmit={handleSubmit}>

          <div className='flex items-center justify-center text-center space-x-4 text-white max-sm:flex-col max-sm:space-y-4'>

              <div className='w-[400px] max-md:w-[300px] max-sm:w-[210px] flex items-center bg-[#1A1A3C] px-4 max-sm:px-2 py-1 rounded-md space-x-2'>

                  <img src={search} alt="search" className='h-4 w-4'/>

                  <input 
                  type="text" 
                  placeholder='Search for a place...' 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='px-4 py-2 rounded-md focus:outline-none max-sm:w-full'/>

              </div>

              <button 
              type="submit"
              className='bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-800 transition max-sm:w-full'>Search</button>

          </div>

        </form>


    </div>

  )
}

export default Hero
