import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherCondition from "./WeatherCondition";
import { prototype } from "events";

function Main(props) {
  return (
    <main>
      <WeatherCondition />
      <WeatherForecast />
    </main>
  );
}

export default Main;
