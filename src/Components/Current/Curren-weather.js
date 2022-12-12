 import "./Current.css";
import React from "react";

const CurrentWeather = ({ data }) => {

  // var today = new Date();
  //   var day = today.getDate();
  //   var month = today.getMonth() + 1;
  //   var year = today.getFullYear();
  //   var date = day + '/' + month + '/' + year;

 var url = "http://openweathermap.org/img/w/";
       var iconUrl = url + data.weather[0].icon + ".png";
  return (
    <div className="weather">
      <div className="top">
      {/* <p className="daten"> {date}</p> */}

        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <div className="temp">
        <p className="temperature">{Math.round(data.main.temp)}  °c</p>
        <img src={iconUrl} alt="icon"/>
        </div>
      </div>
      <div className="bottom">
          
        <div className="details">
          <div className="parameter-row">
            <div>
            <span className="parameter-label">Sensation thermique  </span>
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.feels_like)}°C
            </span>
            </div>
            <div>
            <img src={require('../../WeIco/thermometer.png')} className="logo1" />

            </div>
          </div>
          <div className="parameter-row">
            <div>
           
            <span className="parameter-label">Vitesse de vent</span>
            <span className="parameter-value"> {data.wind.speed} m/s</span>
            </div>
            <div>
            <img src={require('../../WeIco/wind.png')} className="logo1" />

            </div>
          </div>
          <div className="parameter-row">
              <div>
            <span className="parameter-label">Humidité</span>
            <span className="parameter-value"> {data.main.humidity}</span>
                </div>
                <div>
                <img src={require('../../WeIco/humidity.png')} className="logo1" />

                </div>
          </div>
          <div className="parameter-row">
            <div>          
            <span className="parameter-label">Pression atmosphérique</span>
            <span className="parameter-value"> {data.main.pressure} hPA</span>
            </div>
            <div>
            <img src={require('../../WeIco/resilience.png')} className="logo1" />

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default CurrentWeather;
