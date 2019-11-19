import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { format } from "date-fns";
import "./App.css";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
      limit: 5,
      current: {},
      city: ""
    };
  }

  changeLimit = limit => {
    this.setState({ limit });
  };

  componentDidMount() {
    axios(
      "https://jr-weather-api-sunyang.herokuapp.com/api/weather?city=beijing&cc=cn"
    ).then(response => {
      const forecasts = response.data.data.forecast
        .slice(0, 10)
        .map(forecast => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, "EEE");
          const time = format(date, "HH:mm");
          return {
            day,
            time,
            high: forecast.maxCelsius,
            low: forecast.minCelsius
          };
        });
      const current = response.data.data.current;
      const city = response.data.data.city.name;
      this.setState({ forecasts, current, city });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <title>Weather API</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Helmet>
        <div className="weather-channel__container">
          <Header />
          <Nav />
          <Main
            forecasts={this.state.forecasts.slice(0, this.state.limit)}
            changeLimit={this.changeLimit}
            limit={this.state.limit}
            current={this.state.current}
            city={this.state.city}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
