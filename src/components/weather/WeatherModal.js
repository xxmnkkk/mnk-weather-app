import React, { useState, useEffect } from "react";
import "./styles/weatherModal.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/reducer/weatherDataSlice";

import { WiCloudyGusts, WiStrongWind, WiHumidity } from "react-icons/wi";
import { GiPressureCooker, GiIsland } from "react-icons/gi";
import { MdLandscape } from "react-icons/md";

export default function WeatherModal() {
  const weatherData = useSelector((state) => state.weatherDatastate);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  console.log("Error: ",error)

  useEffect(() => {
    if (weatherData.cityName !== "") {
      const apiKey = "1678af5473c6a969ff4d9365dd2552df";
      const city = weatherData.cityName;
      setLoading(true);
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        })
        .then((response) => {
          console.log(response.data);
          dispatch(setData(response.data));
        })
        .catch((error) => {
          console.log(error.response.data.message);
          dispatch(setData(null))
          setError(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [weatherData.cityName, dispatch]);

  const date = new Date();
  const todaysDate = date.toString().slice(4, 15);
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <div className="weather-container">
      {weatherData.data ? (
        <div className="weather-sub-container">
          <div className="sub-div-left">
            <div className="sub-div-left-top">
              <div>{weatherData.data.name}</div>
              <span>{todaysDate}</span>
            </div>

            <div className="sub-div-left-middle">
              <div className="middle-deg">
                {Math.round(weatherData.data.main.temp)}
                <sup>o</sup>
              </div>
              <span className="middle-type">
                {weatherData.data.weather[0].main}
              </span>
              <span className="middle-temp">
                H:{Math.round(weatherData.data.main.temp_max)}
                <sup>o</sup> L: {Math.round(weatherData.data.main.temp_min)}
                <sup>o</sup>
              </span>
            </div>

            <div className="sub-div-left-bottom">
              {weatherData.data.wind.gust && (
                <div className="sub-sub-div-left-bottom">
                  <WiCloudyGusts className="icon" />
                  {weatherData.data.wind.gust}
                </div>
              )}

              {weatherData.data.wind.speed && (
                <div className="sub-sub-div-left-bottom">
                  <WiStrongWind className="icon" />
                  {weatherData.data.wind.speed}
                </div>
              )}

              {weatherData.data.coord.lon && (
                <div className="sub-sub-div-left-bottom">
                  lon {weatherData.data.coord.lon}
                </div>
              )}

              {weatherData.data.coord.lat && (
                <div className="sub-sub-div-left-bottom">
                  lat {weatherData.data.coord.lat}
                </div>
              )}
            </div>
          </div>
          <div className="sub-div-right">
            <div className="sub-div-right-one">
              <div>
                {hour}:{min} {hour >= 12 && hour < 24 ? "PM" : "AM"}
              </div>

              <div>
                <span>
                  {Math.round(weatherData.data.main.temp)}
                  <sup>o</sup>
                </span>
              </div>

              <span>
                Feels like {Math.round(weatherData.data.main.feels_like)}
              </span>

              <span>{weatherData.data.weather[0].main}</span>
            </div>

            <div className="sub-div-right-two">
              <div className="sub-sub-div-right-two">
                <WiHumidity />
                <span>{weatherData.data.main.humidity} %</span>
              </div>

              <div className="sub-sub-div-right-two">
                <GiPressureCooker />
                <span>{weatherData.data.main.pressure} hPa</span>
              </div>

              <div className="sub-sub-div-right-two">
                <MdLandscape />
                <span>{weatherData.data.main.grnd_level} meters</span>
              </div>

              <div className="sub-sub-div-right-two">
                <GiIsland />
                <span>{weatherData.data.main.sea_level} meters</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="default-message">
          {error ? <div className="error">
            <span>{error}</span>
            <span>Please select different city</span>
          </div> : "Please select city to view weather information"}
        </div>
      )}

      {loading && <div className="loading"></div>}
    </div>
  );
}
