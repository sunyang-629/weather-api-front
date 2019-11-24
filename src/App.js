import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { getWeatherFor } from "./utils/axios";
import { fetchDataThunkAction } from "./redux/weatherAction";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // forecasts: [],
      // current: {},
      // cityName: "",
      input: "",
      unit: "C"
    };
  }

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

  // updateWeather = data => {
  //   const forecasts = data.forecast.slice(0, 10);
  //   const current = data.current;
  //   const cityName = data.city.name;
  //   this.setState({ forecasts, current, cityName });
  // };

  componentDidMount() {
    this.props.fetchData('Brisbane')
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
            // forecasts={this.state.forecasts.slice(0, this.state.limit)}
            // current={this.state.current}
            // cityName={this.state.cityName}
            unit={this.state.unit}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: cityName => dispatch(fetchDataThunkAction(cityName))
});

export default connect(null, mapDispatchToProps)(App);
