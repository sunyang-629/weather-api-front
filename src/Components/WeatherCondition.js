import React from "react";
import { connect } from "react-redux";
import IconUmberella from "./../icon/icon-umberella.png";
import IconWind from "./../icon/icon-wind.png";
import IconCompass from "./../icon/icon-compass.png";

function WeatherCondition(props) {
  const {
    // cityName,
    // current: {
    //   maxCelsius,
    //   maxFahrenheit,
    //   humidity,
    //   windSpeed,
    //   windDirection,
    //   weather
    // },
    unit
  } = props;

  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{props.cityName}</div>
      <div style={{ textAlign: "center", fontSize: "14px" }}>{props.current.weather}</div>
      <div className="weather-condition__temp">
        {unit === "C" ? props.current.maxCelsius : props.current.maxFahrenheit} <sup>&deg;</sup>
        {unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={IconUmberella} />
          <span className="citem">{props.current.humidity}%</span>
        </div>
        <div>
          <img src={IconWind} />
          <span className="citem">{props.current.currentwindSpeed} km/h</span>
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
  current: state.weather.current
})

export default connect(mapStateToProps)(WeatherCondition);
