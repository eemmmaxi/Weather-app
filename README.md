# Frontend Mentor - Weather app solution

This a weather appp resbonsive on both mobile and desktop screens


## Overview

The Weather App is a responsive web application that allows users to search for and view real-time weather information for any location worldwide. Users can see current weather conditions, including temperature, weather icons, and detailed location data. The app also provides additional metrics such as "feels like" temperature, humidity, wind speed, and precipitation. 

A 7-day forecast and an hourly forecast are available, enabling users to plan ahead with confidence. The interface supports toggling between metric and imperial units, as well as switching between Celsius and Fahrenheit for temperature.


## The Challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown 
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page











### Built with

- Semantic HTML5 Markup
- Tailwind Css for styling
- Reactjs 
- large screen- for default
- Responsive on smaller screens



[What I learned](#what-i-learned)

Using grid-cols rather than flex is better for many same sized boxes

<div className="grid grid-cols-5 max-sm:grid-cols-2 gap-4">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>


There are math built in functions in react that are very hand like the Math.round() , new.Date()

Math.round(weather.current.temperature_2m) for rounding off numbers

new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })   for getting time and information about 
the time and day and render it in different formats





