import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayForecast(response) {
    alert(`Wheather in ${props.name} is ${response.data.main.temp}`);
  }

  let apiKey = "f81614abe2395d5dfecd45b9298041de";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);

  return <h2>2222</h2>;
}
