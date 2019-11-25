import React from "react";
import { format } from "date-fns";
import ForecastRow from "./ForecastRow";

import { connect } from "react-redux";
import { changeLimitAction } from "./../redux/weatherAction";

class WeatherForecast extends React.Component {
  render() {
    const { changeLimit, limit, unit } = this.props;
    const forecasts = this.props.forecasts.slice(0, limit);

    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            onClick={() => changeLimit(5)}
            className={`forecast__switch_0  ${
              limit === 5 ? "switch-active" : ""
            }`}
          >
            5 items
          </button>
          <button
            onClick={() => changeLimit(10)}
            className={`forecast__switch_1  ${
              limit === 10 ? "switch-active" : ""
            }`}
          >
            10 items
          </button>
        </div>
        {forecasts.map(forecast => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");
          return (
            <ForecastRow
              key={"forecast.day" + forecast.time}
              day={day}
              high={unit === "C" ? forecast.maxCelsius : forecast.maxFahrenheit}
              low={unit === "C" ? forecast.minCelsius : forecast.minFahrenheit}
              time={time}
              unit={unit}
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  limit: state.weather.limit,
  forecasts: state.weather.forecasts,
  unit:state.weather.unit
});

const mapDispatchToProps = dispath => ({
  changeLimit: limit => dispath(changeLimitAction(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);
