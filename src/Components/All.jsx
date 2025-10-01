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
import todaysm from "../assets/images/bg-today-small.svg";



const All = ( { searchTerm , temp , winds , prec } ) => {


  const [days, setDays] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString("en-US", { weekday: "long" });
  });
  const[open , setOpen] = useState(false);

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


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

        const url = `${import.meta.env.VITE_WEATHER_API}?latitude=${latitude}&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weathercode` +
        `&hourly=temperature_2m,weathercode` +
        `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
        `&temperature_unit=${temp}` +
        `&windspeed_unit=${winds}` +
        `&precipitation_unit=${prec}` +
        `&forecast_days=7` +
        `&timezone=auto`;


        const weatherRes = await fetch(url);

        const weatherData = await weatherRes.json();

        // ✅ Combine weather + location info
        const updatedWeather = {
          ...weatherData,
          location: { name, country, latitude, longitude },
        };

        setWeather(updatedWeather);

      } catch (err) {
        setError("Failed to fetch weather.");
      } finally {
        setLoading(false);
      }
    };

// ✅ Log whenever state actually updates
   useEffect(() => {
    fetchWeather();
  }, [searchTerm,temp,winds,prec]);

  const weatherImages = {
  0: sunny,       // clear sky
  1: sunny,       // mostly clear
  2: partcloudy,      // partly cloudy
  3: overcast,      // overcast
  45: fog,     // fog
  48: fog,     // fog
  51: drizzle, 
  80: drizzle,     // light rain
  61: rain,      // rain
  71: snow,      // snow/storm
  95: storm,      // thunderstorm
};




  const getNextHours = () => {
  if (!weather?.hourly) return [];

  const times = weather.hourly.time;
  const temps = weather.hourly.temperature_2m;
  const codes = weather.hourly.weathercode;

  // Get all unique weekdays from hourly times
  const allWeekdays = times.map(t => new Date(t).toLocaleDateString("en-US", { weekday: "long" }));
  // Find the first index where the weekday matches the selected day
  const startIndex = allWeekdays.findIndex(d => d === days);
  if (startIndex === -1) return [];

  // Get the date string of the selected day
  const selectedDateStr = new Date(times[startIndex]).toDateString();

  // Filter all hours for the selected day
  const hoursForDay = times
    .map((t, i) => ({ t, i }))
    .filter(({ t }) => new Date(t).toDateString() === selectedDateStr);

  return hoursForDay.map(({ t, i }) => {
    const code = codes[i];
    const icon = weatherImages[code] || sunny;
    return {
      time: new Date(t).toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
      }),
      temp: Math.round(temps[i]) + "°",
      icon,
    };
  });
};


{/**Error state */}
if (error) {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] w-full bg-[#0B0B33] text-white px-6 space-y-6">
      <img src={err} alt="error" className="h-20 w-20" />
      <h1 className="font-bricolage font-bold text-3xl tracking-tight">
        Something went wrong
      </h1>
      <p className="px-8">{error}</p>
      <div className="flex items-center space-x-3 bg-[#1A1A3C] px-4 py-2 rounded-md">
        <img src={retr} alt="retry" className="h-4 w-4" />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 cursor-pointer rounded-md hover:bg-blue-800 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}



  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleDaySelect = (day) => {
    setDays(day);
    setOpen(false);
  };


  return (
    <>
    {/**Render 2 clomns 1 is 2/3  */}

      <div className = "grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 gap-4 px-40 max-sm:px-10 py-10 text-white overflow-hidden">

        {/**Left side */}
        <div className='col-span-2 space-y-6'>

          {/**Today card */}

          <div
            className="
              flex-col max-sm:flex-col sm:flex-row flex items-center justify-between rounded-xl text-white bg-cover bg-center w-full h-[230px] px-5 py-7
            "
            style={{ backgroundImage: `url(${today})` }}
            > 

            {weather && (
            <>
              <div className="flex flex-col text-left space-y-3">
                <h1 className="font-bricolage font-bold text-3xl max-sm:text-xl">
                  {weather.location.name}, {weather.location.country}
                </h1>
                <p className="font-dmsans text-sm max-sm:text-[15px]">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
                
              <div className="flex items-center space-x-3 max-sm:space-x-1">
                <img src={weatherImages[weather.current.weathercode] || partcloudy} alt="sun" className="h-25 w-25 max-sm:h-15 w-15" />
                <h1 className="font-bricolage font-bold text-7xl max-sm:text-5xl">
                   {Math.round(weather.current.temperature_2m)}
                  <span className="text-7xl max-sm:text-5xl">°</span>
                </h1>
              </div>
            </>
          )}

          </div>

          {/* Feels like / Humidity / Wind / Precipitation */}
          {weather && (
            <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2 p-3 rounded-md bg-[#1A1A3C]">
                <h6>Feels like</h6>
                <h1 className="font-dmsans text-2xl">
                  {Math.round(weather.current.apparent_temperature)}°
                </h1>
              </div>
              <div className="flex flex-col space-y-2 p-3 rounded-md bg-[#1A1A3C]">
                <h6>Humidity</h6>
                <h1 className="font-dmsans text-2xl">
                  {weather.current.relative_humidity_2m}%
                </h1>
              </div>
              <div className="flex flex-col space-y-2 p-3 rounded-md bg-[#1A1A3C]">
                <h6>Wind</h6>
                <h1 className="font-dmsans text-2xl">
                  {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}
                </h1>
              </div>
              <div className="flex flex-col space-y-2 p-3 rounded-md bg-[#1A1A3C]">
                <h6>Precipitation</h6>
                <h1 className="font-dmsans text-2xl">
                  {weather.current.precipitation} {weather.current_units.precipitation}
                </h1>
              </div>
            </div>
          )}


          {/* Daily Forecast */}
          <div>
            <h4 className="mb-3">Daily Forecast</h4>
            <div className="grid grid-cols-7 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">
              {weather?.daily?.time.map((day, i) => (
                <div
                  key={day}
                  className="flex flex-col items-center py-2 px-1 rounded-md bg-[#1A1A3C]"
                >
                  <p>{new Date(day).toLocaleDateString("en-US", { weekday: "short" })}</p>
                  <img src={weatherImages[weather.daily.weathercode[i]] || partcloudy} alt="icon" className="h-8 w-8" />
                  <div className='flex justify-between space-x-2'> 
                    <h1 className='font-bricolage font-slight'>{Math.round(weather.daily.temperature_2m_min[i])}°</h1> 
                    <h1 className='font-bricolage font-slight'>{Math.round(weather.daily.temperature_2m_max[i])}°</h1> 
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>



        {/* Right side (Hourly Forecast) */}
        <div className="flex flex-col flex-1 space-y-2 py-2 px-4 rounded-md bg-[#1A1A3C] overflow-y-auto h-[500px]">
            
          {/* Example Hourly cards */}
          {/* Left side (Hourly Forecast) */}
          <div className="flex flex-col flex-1 space-y-3 py-4 px-4 rounded-md bg-[#1A1A3C]">
            <div className="flex items-center justify-between py-2 w-full">
              <h4>Hourly forecast</h4>
              {/* Dropdown container */}
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 p-2 bg-[#26264D] rounded-md cursor-pointer"
                >
                  <p className="text-xs">{days}</p>
                  <img src={drop} alt="drop" className="h-2 w-2" />
                </div>
                {open && (
                  <div className="absolute right-0 w-60 px-2 mt-2 bg-[#1A1A3C] border border-gray-700 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                        (day) => (
                          <li
                            key={day}
                            className="px-4 py-2 rounded-md hover:bg-gray-700 cursor-pointer"
                            onClick={() => handleDaySelect(day)}
                          >
                            {day}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Example Hourly cards */}
            {getNextHours().map((hour, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-4 bg-[#26264D] rounded-md w-full"
              >
                <div className="flex items-center space-x-2">
                  <img src={hour.icon} alt="icon " className='h-8 w-8' />
                  <h1>{hour.time}</h1>
                </div>
                <h1>{hour.temp}</h1>
              </div>
              ))
            }

          </div>

        </div>




      </div>

    </>

  )
}

export default All
