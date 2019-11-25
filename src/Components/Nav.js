import React from "react";
import { connect } from "react-redux";
import { toggleUnitAction, setSearchCityName, fetchDataThunkAction } from "./../redux/navigationAction";

function Nav(props) {
  const handleKeyPress = event => {
    if (event.key === 'Enter')
      return props.searchCity(props.input);
  }

  return (
    <nav>
      <div style={{ flex: 1 }}>
        <input
          onChange={event => props.setSearchCityName(event.target.value)}
          className="search-input"
          value={props.input}
          onKeyPress={handleKeyPress}
        />
        <button onClick={event => props.searchCity(props.input)} className="search-btn">
          <i className="fa fa-search"></i>
        </button>

        <button className="temp-switch" onClick={props.toggleUnit}>
          <i
            className="fa fa-thermometer-empty"
            aria-hidden="true"
            style={{ paddingRight: "5px" }}
          ></i>
          <sup>&deg;</sup>
          {[props.toToggleUnit]}
        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  unit: state.weather.unit,
  toToggleUnit: state.weather.unit === "C" ? "F" : "C",
  input:state.weather.input
})

const mapDispatchToProps = dispatch => ({
  toggleUnit: () => dispatch(toggleUnitAction()),
  setSearchCityName: city => dispatch(setSearchCityName(city)),
  searchCity: cityName => dispatch(fetchDataThunkAction(cityName))
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
