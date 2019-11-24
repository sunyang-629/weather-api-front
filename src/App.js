import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./App.css";
import { getWeatherFor } from "./utils/axios";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
      // limit: 5,
      current: {},
      cityName: "",
      input: "",
      unit: "C"
    };
  }

  // changeLimit = limit => {
  //   this.setState({ limit });
  // };

  changeInput = event => {
    this.setState({ input: event.target.value });
  };

  toggleUnit = () => {
    this.setState(state => ({
      unit: state.unit === "C" ? "F" : "C"
    }));
  };

  searchCity = () => {
    getWeatherFor(this.state.input).then(this.updateWeather);
  };

  updateWeather = response => {
    const forecasts = response.data.data.forecast.slice(0, 10);
    const current = response.data.data.current;
    const cityName = response.data.data.city.name;
    this.setState({ forecasts, current, cityName });
  };

  componentDidMount() {
    getWeatherFor("Brisbane").then(this.updateWeather);
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
          <Nav
            inputValue={this.state.input}
            changeInput={this.changeInput}
            searchCity={this.searchCity}
            toggleUnit={this.toggleUnit}
            unit={this.state.unit}
          />
          <Main
            forecasts={this.state.forecasts.slice(0, this.state.limit)}
            changeLimit={this.changeLimit}
            limit={this.state.limit}
            current={this.state.current}
            cityName={this.state.cityName}
            unit={this.state.unit}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
