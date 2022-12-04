import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather React App</h1>

      <Weather />
      <br />
      <strong>
        <a
          href="https://github.com/Iryna-Shtangret/wheather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Iryna Mrachkovska
      </strong>
    </div>
  );
}
