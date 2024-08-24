import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherObject, setWeatherObject] = useState();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => setWeatherObject(data));
      });
    } else {
      console.log("geolocation not supported");
    }
  }, []);
  return (
    weatherObject && (
      <div style={{ textAlign: "center", paddingTop: "200px" }}>
        <div>SHESHER: {weatherObject.name}</div>
        <div>Temperatur: {weatherObject.main.temp}</div>
        <div>Fill like : {weatherObject.main.feels_like}</div>
      </div>
    )
  );
};

export default Weather;
