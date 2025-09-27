import React from 'react';
import today from "../assets/images/bg-today-large.svg";
import sunny from "../assets/images/icon-sunny.webp";
import partcloudy from "../assets/images/icon-partly-cloudy.webp";
import rain from "../assets/images/icon-rain.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";
import drop from "../assets/images/icon-dropdown.svg";




const All = () => {
  return (

    <div className='flex items-center justify-center text-center space-x-3 text-white mt-10 px-40 py-5 space-y-6'>
      

      {/** Right side */}

      <div className='flex flex-col space-y-4'>

        {/**today */}
        <div
        className="rounded-xl p-6 text-white bg-cover bg-center w-full h-[230px]"
        style={{ backgroundImage: `url(${today})` }}
        >

        </div>

        {/** prec feels like humidity wind  */}

        <div className='flex justify-between text-left space-x-3'>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Feels like</h6>
                <h1>20°</h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Humidity</h6>
                <h1>46%</h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Wind</h6>
                <h1>14 km/h</h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Precipitation</h6>
                <h1>0 mm</h1>

            </div>

        </div>


        {/**Daily forecast */}

        <div className='flex flex-col text-left'>
            
            <div className='mt-4'>
              <div>
                  <h4>Daily Forecast</h4>
              </div>
                
                <div className='flex items-center justify-center text-center space-x-2 mt-3'>
                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Mon</h6>
                        <img src={sunny} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Tue</h6>
                        <img src={partcloudy} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Wed</h6>
                        <img src={rain} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Thur</h6>
                        <img src={storm} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Fri</h6>
                        <img src={snow} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Sart</h6>
                        <img src={drizzle} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-2 p-3 rounded-md text-left bg-[#1A1A3C]'>
                        <h6>Sun</h6>
                        <img src={fog} alt="sun"  className='h-10 w-10'/>
                        <div className='flex justify-between space-x-2'>
                          <h1>20°</h1>
                          <h1>40°</h1>
                        </div>
                    </div>

                </div>

            </div>

        </div>

      </div>




      {/**Left side */}

      <div className='flex flex-col space-y-3 py-2 px-4 w-full h-full rounded-md text-left bg-[#1A1A3C]'>

        <div className='flex items-center justify-between py-2 w-full'>
          <h4>Hourly forecast</h4>

          <div className='flex items-center space-x-2 p-2 bg-[#26264D] rounded-md cursor-pointer'> 
            <p className='text-xs'>Tuesday</p>
            <img src={drop} alt="drop" className='h-2 w-2' />
          </div>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={sunny} alt="sun" className='h-8 w-8' />
            <h1>3 PM</h1>
          </div>
          <h1>20°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={partcloudy} alt="sun" className='h-8 w-8' />
            <h1>4 PM</h1>
          </div>
          <h1>20°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={rain} alt="sun" className='h-8 w-8' />
            <h1>5 PM</h1>
          </div>
          <h1>20°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={storm} alt="sun" className='h-8 w-8' />
            <h1>6 PM</h1>
          </div>
          <h1>20°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={drizzle} alt="sun" className='h-8 w-8' />
            <h1>7 PM</h1>
          </div>
          <h1>18°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={fog} alt="sun" className='h-8 w-8' />
            <h1>8 PM</h1>
          </div>
          <h1>18°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={overcast} alt="sun" className='h-8 w-8' />
            <h1>9 PM</h1>
          </div>
          <h1>17°</h1>
        </div>

        <div className='flex items-center justify-between py-2 px-4 bg-[#26264D] rounded-md w-full'>
          <div className='flex items-center space-x-2'>
            <img src={overcast} alt="sun" className='h-8 w-8' />
            <h1>10 PM</h1>
          </div>
          <h1>17°</h1>
        </div>





      </div>

    </div>
  )
}

export default All
