import React from "react";
import style from "./style.module.css";

// WeatherCard component displays weather information for a specific day
const WeatherCard = ({ data, index }) => {
  // Array to represent days of the week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create a date object from the provided date string
  const date = new Date(data.date);
  // Get the day of the week from the date
  let day = days[date.getDay()];

  // Render the WeatherCard component
  return (
    <div className={style.container}>
      {/* Apply different styles for the current day and other days */}
      <div className={index === 0 ? style.currentDay : style.card}>
        {/* Display the day of the week */}
        <div className={style.day}>{day}</div>
        {/* Display the weather conditions icon */}
        <div className={style.conditions}>
          <img src={data.day.condition.icon} alt={data.day.condition.text} />
        </div>
        {/* Display the maximum and minimum temperatures for the day */}
        <div className={style.temp}>
          <span>{data.day.maxtemp_c}°C</span>
          <span>{data.day.mintemp_c}°C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
