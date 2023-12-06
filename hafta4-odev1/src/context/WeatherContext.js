import { createContext, useState, useEffect, useContext } from "react";
import useFetch from "../useFetch";

// Create a context to share weather-related state across components
const WeatherContext = createContext();

// WeatherProvider component responsible for managing weather-related state
export const WeatherProvider = ({ children }) => {
  // State to store the selected city, retrieved from localStorage
  const [city, setCity] = useState(localStorage.getItem("city") || "Paris");
  // Use the useFetch hook to fetch weather data based on the selected city
  const { data, loading, error } = useFetch(city);

  // Combine state values into a single object for context value
  const values = {
    city,
    setCity,
    data,
    loading,
    error,
  };

  // Update localStorage whenever the selected city changes
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  // Provide the values to the context for consumption by nested components
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

// Custom hook to access weather-related context values
export const useWeather = () => useContext(WeatherContext);
