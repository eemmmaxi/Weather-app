import React, { useEffect, useState } from 'react';
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
import err from "../assets/images/icon-error.svg";
import retr from "../assets/images/icon-retry.svg";



const All = ( { searchTerm } ) => {


  const[days , setDays] = useState("Tuesday");
  const[open , setOpen] = useState(false);

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  if (!searchTerm) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      try {
        // Step 1: Geocode city -> lat/lon
        const geoRes = await fetch(
        `${import.meta.env.VITE_GEO_API}?name=${encodeURIComponent(
          searchTerm
        )}&count=1&language=en&format=json`
        );

        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          setError("No location found.");
          setLoading(false);
          return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // Step 2: Fetch weather data
        const weatherRes = await fetch(
        `${import.meta.env.VITE_WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m`
        );

        const weatherData = await weatherRes.json();

        // ✅ Combine weather + location info
        const updatedWeather = {
          ...weatherData,
          location: { name, country, latitude, longitude },
        };

        setWeather(updatedWeather);

        // ✅ Immediate log (fresh data)
        console.log("Fetched weather:", updatedWeather);

      } catch (err) {
        setError("Failed to fetch weather.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [searchTerm]);

// ✅ Log whenever state actually updates
  useEffect(() => {
    if (weather) {
      console.log("Weather state updated:", weather);
    }
  }, [weather]);



  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleDaySelect = (day) => {
    setDays(day);
    setOpen(false);
  };




  return (

    <div className='flex items-center justify-center text-center space-x-3 text-white mt-10 px-40 py-5 space-y-6'>
      
      {error && (
        <div className="flex flex-col items-center justify-center text-center mt-10 px-40 py-5 space-y-6">
          <img src={err} alt="error" className='h-20 w-20'/>
          <h1 className='font-bricolage font-bold text-3xl tracking-tight'>Something went wrong</h1>
          <p className='px-8'>{error}</p>
          <div className='flex items-center space-x-3 bg-[#1A1A3C]'>
            <img src={retr} alt="retry" className='h-4 w-4'/>
            <button 
            onClick={() => window.location.reload()}
            className='px-4 py-2 cursor-pointer rounded-md hover:bg-blue-800 transition'>Retry</button>
          </div>
        </div>
      )}
      {/** Right side */}

      <div className='flex flex-col space-y-4'>

        {/**today */}
        <div
        className="flex items-center justify-between rounded-xl p-6 text-white bg-cover bg-center w-full h-[230px]"
        style={{ backgroundImage: `url(${today})` }}
        >

          {weather && 
          <>
            <div className='flex flex-col text-left space-y-3'>
              <h1 className='font-bricolage font-bold text-3xl'> {weather.location.name}, {weather.location.country}</h1>
              <p className='font-dmsans text-sm'>{new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>
              {/**<p>{weather.current_weather.time}</p>  */}
            </div>

            <div className='flex items-center space-x-3'>
              <img src={sunny} alt="sun" className='h-25 w-25' />
              <h1 className='font-bricolage font-bold text-8xl'>
                {weather.current.temperature_2m} 
                <span className='text-8xl'>°</span>
              </h1>
            </div>

            
          </>}
          

          

        </div>

        {/** prec feels like humidity wind  */}

        {
          weather &&

          <div className='flex justify-between text-left space-x-3'>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Feels like</h6>
                <h1 className='font-dmsans font-slight text-2xl'>
                  {weather.current.apparent_temperature} 
                  <span className=''>°</span>
                </h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Humidity</h6>
                <h1 className='font-dmsans font-slight text-2xl'>
                  {weather.current.relative_humidity_2m}  {weather.current_units.relative_humidity_2m}
                </h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Wind</h6>
                <h1 className='font-dmsans font-slight text-2xl'>
                  {weather.current.wind_speed_10m}  {weather.current_units.wind_speed_10m}
                </h1>

            </div>

            <div className='flex flex-col space-y-2 p-3 rounded-md w-full text-left bg-[#1A1A3C]'>

                <h6>Precipitation</h6>
                <h1 className='font-dmsans font-slight text-2xl'>
                  {weather.current.precipitation}  {weather.current_units.precipitation}
                </h1>

            </div>

        </div>

        }


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

        <div className="flex items-center justify-between py-2 w-full">
          <h4>Hourly forecast</h4>

          {/* Dropdown container */}
          <div className="relative">
            {/* Dropdown button */}
            <div
              onClick={toggleDropdown}
              className="flex items-center space-x-2 p-2 bg-[#26264D] rounded-md cursor-pointer"
            >
              <p className="text-xs">{days}</p>
              <img src={drop} alt="drop" className="h-2 w-2" />
            </div>

            {/* Dropdown menu */}
            {open && (
              <div className="absolute right-0  w-60 px-2 mt-2 bg-[#1A1A3C] border border-gray-700 rounded-md shadow-lg z-50">
                <ul className="py-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <li
                      key={day}
                      className="px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleDaySelect(day)}
                    >
                      {day}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
