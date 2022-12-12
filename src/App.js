 import "./App.css";
import React, { useState } from "react";
import Search from "./Components/search/search";
import CurrentWeather from "./Components/Current/Curren-weather";
import Forecast from "./Components/Forecast/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";


export default function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
 


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&&lang=fr`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&&lang=fr`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        console.log(weatherResponse);
        const forcastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });

        
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App"  > 
   

<img src={require('../src/weather-app.png')} className="logo" />

<h1 className="titlePage">METEONOW </h1>
      <Search onSearchChange={handleOnSearchChange} />
      <div className="app2">
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <> <Forecast data={forecast} />  </> }
    </div>
    
    </div>
  );
}