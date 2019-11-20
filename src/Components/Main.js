import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherCondition from "./WeatherCondition";

function Main(props) {
  return (
    <main>
      <WeatherCondition current={props.current} cityName={props.cityName} />
      <WeatherForecast
        forecasts={props.forecasts}
        changeLimit={props.changeLimit}
        limit={props.limit}
      />
    </main>
  );
}

export default Main;
