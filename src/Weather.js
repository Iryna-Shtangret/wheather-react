import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [deckription, setDeckription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function forDisplayDataWeather(response) {
    setTemperature(response.data.main.temp);
    setDeckription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function showDataWeather(event) {
    event.preventDefault();
    if (city) {
      let key = "455eda8f47bc37c6412cf62411ef3dff";
      let unit = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`;
      axios.get(url).then(forDisplayDataWeather);
    }
  }

  function showDataRezult() {
    if (temperature) {
      return (
        <ul className="list">
          <li>Temperature: {Math.round(temperature)}°С</li>
          <li>Deckription: {deckription}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt="" />
          </li>
        </ul>
      );
    } else {
      return "";
    }
  }

  return (
    <div>
      <form onSubmit={showDataWeather}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>{showDataRezult()}</div>
    </div>
  );
}
