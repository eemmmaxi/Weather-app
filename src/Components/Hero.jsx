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

    <div className="flex flex-col items-center justify-center text-center text-white px-20 space-y-6">

        <h1 className="font-bricolage font-bold text-5xl tracking-tight mt-40">
          How's the sky looking today?
        </h1>

        {/** search bar */}

        <form onSubmit={handleSubmit}>

          <div className='flex space-x-4 text-white'>

              <div className='w-[400px] flex items-center bg-[#1A1A3C] px-4 py-1 rounded-md space-x-2'>

                  <img src={search} alt="search" className='h-4 w-4'/>

                  <input 
                  type="text" 
                  placeholder='Search for a place...' 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='px-4 py-2 rounded-md bg-[#1A1A3C] focus:outline-none'/>

              </div>

              <button 
              type="submit"
              className='bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-800 transition'>Search</button>

          </div>

        </form>


    </div>

  )
}

export default Hero
