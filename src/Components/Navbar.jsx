import React from 'react'
import logosvg from "../assets/images/logo.svg";
import { CiSettings } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav  className="fixed top-0 left-0 w-full flex items-center justify-between max-w-[1440px] bg-[#0B0B33] px-40 z-10">

        <div className='cursor-pointer'>
            <img src={logosvg} alt="logo" className='w-30 h-30'/>
        </div>

        <div className='bg-[#1A1A3C] px-4 py-2 rounded-md space-x-2 flex items-center text-white cursor-pointer hover:bg-gray-700 transition'>
            <CiSettings  className='h-6 w-6'/>
            <p>Units</p>
            <RiArrowDropDownLine className='h-6 w-6'/>
        </div>


    </nav>
  )
}

export default Navbar
