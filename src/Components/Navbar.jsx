import React, { useState } from 'react'
import logosvg from "../assets/images/logo.svg";
import mark from "../assets/images/icon-checkmark.svg";
import sett from "../assets/images/icon-units.svg";
import drop from "../assets/images/icon-dropdown copy.svg";



const Navbar = ({ temp, setTemp, winds, setWinds, prec, setPrec }) => {

  const[open , setOpen] = useState(false);

  return (
    <nav  className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#0B0B33] h-20 px-40 max-sm:px-10 z-10">

        <div className='cursor-pointer'>
            <img 
            src={logosvg} 
            alt="logo" 
            className='w-30 h-30 max-sm:w-15 h-15'/>
        </div>


          {/** Dropdown menu */}
          <div className='relative px-3'>
            <div 
            onClick={() => setOpen(!open)}
            className='bg-[#1A1A3C] px-4 py-2 rounded-md space-x-2 max-sm:space-x-1 flex items-center text-white cursor-pointer hover:bg-[#2A2A5C] transition'>
              <img src={sett} alt="settings" className='h-4 w-4 max-sm:h-2 w-2'/>
              <p className='font-bricolage text-xl max-sm:text-[5px]'>Units</p>
              <img src={drop} alt="dropdown" className='h-4 w-4 max-sm:h-1 w-1'/>
            </div>  

            { open && (
              <div
              className="absolute right-0 mt-2 max-w-xs w-64 max-sm:w-30 bg-[#1A1A3C] text-white border border-gray-700 rounded-md shadow-lg z-50 overflow-hidden">

                <div className="p-3">
                  <h1 className='font-dmsans text-2xl max-sm:text-[8px]'>Switch to Imperial</h1>
                </div>

              <div className="mb-3 border-b border-gray-500">
                <div className="text-[11px] text-gray-400 px-1 mb-1">Temperature</div>
                <div className="flex flex-col gap-1">
                  <div
                  onClick={() => setTemp("celsius")} 
                  className='cursor-pointer p-2'>

                    {temp === "celsius" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Celcious(°C)</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Celcious(°C)</p>
                      )}
             
                  </div>
                  <div 
                  onClick={() => setTemp("fahrenheit")}
                  className='cursor-pointer p-2'>

                    {temp === "fahrenheit" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Fahrenheit(°F)</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Fahrenheit(°F)</p>
                      )}

                    
                  </div>
                </div>
              </div>

              <div className="mb-3 border-b border-gray-500">
                <div className="font-dmsans text-xs text-gray-400 px-1 mb-1">Wind speed</div>
                <div className="flex flex-col gap-1">
                  <div 
                  onClick={() => setWinds("kmh")}
                  className='cursor-pointer p-2'>

                    {winds === "kmh" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>km/h</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>km/h</p>
                      )}

                  </div>

                  <div
                   onClick={() => setWinds("mph")}
                   className='cursor-pointer p-2'>

                    {winds === "mph" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>mph</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>mph</p>
                      )}
                    
                  </div>

                </div>
              </div>

              <div className="mb-3 ">
                <div className="font-dmsans text-xs text-gray-400 px-1 mb-1 ">Precipitation</div>
                <div className="flex flex-col gap-1">

                  <div 
                  onClick={() => setPrec("mm")}
                  className='cursor-pointer p-2'>
                    {prec === "mm" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Millimeters (mm)</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Millimeters (mm)</p>
                      )}        
                    
                  </div>

                  <div 
                  onClick={() => setPrec("inch")}
                  className='cursor-pointer p-2'>

                    {prec === "inch" ? (
                      <div className="flex items-center justify-between bg-[#2A2A5C] p-2 rounded-md">
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Inch</p>
                        <img src={mark} alt="dropdown" className="h-3 w-3 max-sm:h-1 w-1" />
                      </div>
                      ) : (
                        <p className='font-dmsans text-2xl max-sm:text-[8px]'>Inch</p>
                      )} 

                  </div>

                </div>
              </div>

              </div>
            )}
          </div> 

        
    </nav>
  )
}

export default Navbar
