import React from "react";
import axios from "axios";
import { format } from "date-fns";
import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {
  // componentDidMount() {
  //   axios(
  //     "https://jr-weather-api-sunyang.herokuapp.com/api/weather?city=brisbane&cc=au"
  //   ).then(response => {
  //     const forecasts = response.data.data.forecast
  //       .slice(0, 10)
  //       .map(forecast => {
  //         const date = new Date(forecast.time * 1000);
  //         const day = format(date, "EEE");
  //         const time = format(date, "HH:mm");
  //         return {
  //           day,
  //           time,
  //           high: forecast.maxCelsius,
  //           low: forecast.minCelsius
  //         };
  //       });
  //     this.setState({ forecasts });
  //   });
  // }

  render() {
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button
            onClick={() => this.props.changeLimit(5)}
            className={`forecast__switch_0  ${
              this.props.limit === 5 ? "switch-active" : ""
            }`}
          >
            5 items
          </button>
          <button
            onClick={() => this.props.changeLimit(10)}
            className={`forecast__switch_1  ${
              this.props.limit === 10 ? "switch-active" : ""
            }`}
          >
            10 items
          </button>
        </div>
        {this.props.forecasts.map(forecast => (
          <ForecastRow
            key={forecast.day + forecast.time}
            day={forecast.day}
            high={forecast.high}
            low={forecast.low}
            time={forecast.time}
          />
        ))}
      </section>
    );
  }
}

export default WeatherForecast;
