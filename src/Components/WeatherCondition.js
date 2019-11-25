import React from "react";
import { connect } from "react-redux";
import IconUmberella from "./../icon/icon-umberella.png";
import IconWind from "./../icon/icon-wind.png";
import IconCompass from "./../icon/icon-compass.png";

function WeatherCondition(props) {

  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{props.cityName}</div>
      <div style={{ textAlign: "center", fontSize: "14px" }}>{props.current.weather}</div>
      <div className="weather-condition__temp">
        {props.unit === "C" ? props.current.maxCelsius : props.current.maxFahrenheit} <sup>&deg;</sup>
        {props.unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={IconUmberella} />
          <span className="citem">{props.current.humidity}%</span>
        </div>
        <div>
          <img src={IconWind} />
          <span className="citem">{props.current.windSpeed} km/h</span>
        </div>
        <div>
          <img src={IconCompass} />
          <span className="citem">{props.current.windDirection}</span>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  cityName: state.weather.cityName,
  current: state.weather.current,
  unit:state.weather.unit
})

export default connect(mapStateToProps)(WeatherCondition);
