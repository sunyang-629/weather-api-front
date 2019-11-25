import React from "react";
import { Helmet } from "react-helmet";
// import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
// import { getWeatherFor } from "./utils/axios";
import { fetchDataThunkAction } from "./redux/weatherAction";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Loader from "./Components/Loader"
import Error from "./Components/Error"

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


  renderMain = () => {
    if (this.props.hasError) return <Error />
    return <Main unit={this.state.unit} />
  }
  // searchCity = () => {
  //   getWeatherFor(this.state.input).then(this.updateWeather);
  // };

  componentDidMount() {
    this.props.fetchWeather('sydney')
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
          {this.props.isLoading ? <Loader /> : this.renderMain()}
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.weather.isLoading,
  hasError:!!state.weather.error
})

const mapDispatchToProps = dispatch => ({
  fetchWeather: cityName => dispatch(fetchDataThunkAction(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
