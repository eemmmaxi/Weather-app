import React, { useState } from 'react'
import logosvg from "../assets/images/logo.svg";
import mark from "../assets/images/icon-checkmark.svg";
import sett from "../assets/images/icon-units.svg";
import drop from "../assets/images/icon-dropdown copy.svg";



const Navbar = () => {

  const[open , setOpen] = useState(false);

  return (
    <nav  className="fixed top-0 left-0 w-full flex items-center justify-between max-w-[1440px] bg-[#0B0B33] h-20 px-40 z-10">

        <div className='cursor-pointer'>
            <img src={logosvg} alt="logo" className='w-30 h-30'/>
        </div>


          {/** Dropdown menu */}

          <div className='bg-[#1A1A3C] px-4 py-2 rounded-md space-x-2 flex items-center text-white cursor-pointer hover:bg-gray-700 transition'>
            <img src={sett} alt="settings" className='h-4 w-4'/>
            <p>Units</p>
            <img src={drop} alt="dropdown" className='h-3 w-3'/>
        </div>   

        
    </nav>
  )
}

export default Navbar
