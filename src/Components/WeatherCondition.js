import React from "react";
import IconUmberella from "./../icon/icon-umberella.png";
import IconWind from "./../icon/icon-wind.png";
import IconCompass from "./../icon/icon-compass.png";

function WeatherCondition(props) {
  const {
    cityName,
    current: {
      maxCelsius,
      maxFahrenheit,
      humidity,
      windSpeed,
      windDirection,
      weather
    },
    unit
  } = props;

  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{cityName}</div>
      <div style={{ textAlign: "center", fontSize: "14px" }}>{weather}</div>
      <div className="weather-condition__temp">
        {unit === "C" ? maxCelsius : maxFahrenheit} <sup>&deg;</sup>
        {unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={IconUmberella} />
          <span className="citem">{humidity}%</span>
        </div>
        <div>
          <img src={IconWind} />
          <span className="citem">{windSpeed} km/h</span>
        </div>
        <div>
          <img src={IconCompass} />
          <span className="citem">{windDirection}</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherCondition;
