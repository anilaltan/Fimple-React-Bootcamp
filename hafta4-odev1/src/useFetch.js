import { useState, useEffect } from "react";

// Custom hook for fetching weather data based on the provided city
const useFetch = (city) => {
  // State to store fetched data
  const [data, setData] = useState(null);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to store any fetch-related errors
  const [error, setError] = useState(null);

  // Effect to fetch data when the city changes
  useEffect(() => {
    // Function to fetch weather data from the API
    const fetchData = async () => {
      // API URL for fetching weather data
      const url = `http://api.weatherapi.com/v1/forecast.json?key=411657e992784fa9bee23209230612&q=${city}&days=8&aqi=no&alerts=no`;

      try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful; otherwise, throw an error
        if (!response.ok) {
          throw new Error("Data could not be retrieved");
        }

        // Parse the response into JSON format and update the data state
        const result = await response.json();
        setData(result);
      } catch (error) {
        // Handle errors and update the error state
        setError(error);
      } finally {
        // Set loading to false when the fetch operation is complete
        setLoading(false);
      }
    };

    // Invoke the fetchData function
    fetchData();
  }, [city]);

  // Return the fetched data, loading status, and any errors
  return { data, loading, error };
};

export default useFetch;
