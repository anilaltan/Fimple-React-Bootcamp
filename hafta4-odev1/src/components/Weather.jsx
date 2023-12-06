import { useWeather } from "../context/WeatherContext";
import SelectCity from "./SelectCity";
import WeatherCard from "./WeatherCard";

import "../App.css";

// Weather component displays the selected city's weather information
const Weather = () => {
  // Access weather-related data, loading status, and errors from the context
  const { data, loading, error } = useWeather();

  // Display a loading message while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if there is an issue fetching the data
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the Weather component
  return (
    <div>
      {/* SelectCity component for choosing the city */}
      <SelectCity />
      {/* Display weather cards for each forecasted day */}
      <div className="container">
        {data.forecast.forecastday.map((item, index) => (
          <WeatherCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
