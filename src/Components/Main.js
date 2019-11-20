import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherCondition from "./WeatherCondition";
import { prototype } from "events";

function Main(props) {
  return (
    <main>
      <WeatherCondition
        current={props.current}
        cityName={props.cityName}
        unit={props.unit}
      />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
        unit={props.unit}
      />
    </main>
  );
}

export default Main;
