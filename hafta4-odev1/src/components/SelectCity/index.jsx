import React, { useState, useEffect } from "react";
import { useWeather } from "../../context/WeatherContext";
import style from "./style.module.css";

const SelectCity = () => {
  // Accessing city state and setCity function from the WeatherContext
  const { city, setCity } = useWeather();
  // State to manage location permission status
  const [locationPermission, setLocationPermission] = useState(null);

  const cities = [
    "Tokyo",
    "Delhi",
    "Shanghai",
    "London",
    "Beijing",
    "İstanbul",
    "Karachi",
    "Mumbai",
    "Moscow",
    "Manila",
    "Tianjin",
    "Mumbai",
    "Guangzhou",
    "Beijing",
    "Shenzhen",
    "Lagos",
    "Jakarta",
    "Lahore",
    "Chongqing",
    "Bangkok",
    "Paris",
  ];

  // Handler function for city selection change
  const handleCityChange = (event) => {
    // Get the selected city name from the event
    const cityName = event.target.value;
    // Update the city state with the selected city
    setCity(cityName);
  };

  // Effect to get user's location and set the city based on the obtained coordinates
  useEffect(() => {
    // Function to get user's location
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // Extract latitude and longitude from the obtained coordinates
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Fetch the city information using reverse geocoding API
          const response = await fetch(
            `https://eu1.locationiq.com/v1/reverse?key=pk.141f9f038811c6edf79a0e3b37de27d1&lat=${latitude}&lon=${longitude}&format=json`
          );

          // Parse the response into JSON format
          const result = await response.json();
          // Extract the city name from the obtained location data
          const cityName = result.address.province;

          // Update the city state with the obtained city name
          setCity(cityName);
        },
        // Handle errors in case location cannot be obtained
        (error) => {
          console.error("Location could not be obtained:", error.message);
          // Update locationPermission state to indicate permission denial or error
          setLocationPermission(false);
        }
      );
    };

    // Invoke the getLocation function to get the user's location
    getLocation();
  }, [setCity]);

  // Render the component
  return (
    <div className={style.container}>
      {/* Display a message if location permission is denied or an error occurs */}
      {locationPermission === false && (
        <p>Location permission was denied or an error occurred.</p>
      )}
      {/* Dropdown menu for selecting cities */}
      <div className={style.locationDiv}>
        <select
          value={city}
          onChange={handleCityChange}
          className={style.location}
        >
          {cities.map((item) => (
            <option value={item}>{item}</option>
          ))}
          {/* <option value="Paris">Paris</option>
          <option value="London">London</option>
          <option value="İstanbul">Istanbul</option> */}
        </select>
      </div>
    </div>
  );
};

export default SelectCity;
