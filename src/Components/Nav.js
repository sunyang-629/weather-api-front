import React from "react";
import { connect } from "react-redux";
import { toggleUnitAction } from "./../redux/navigationAction";

function Nav(props) {
  const toggleUnit = props.unit === "C" ? "F" : "C";
  return (
    <nav>
      <div style={{ flex: 1 }}>
        <input
          onChange={props.changeInput}
          className="search-input"
          value={props.inputValue}
        />
        <button onClick={props.searchCity} className="search-btn">
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
  toToggleUnit:state.weather.unit === "C" ? "F" : "C"
})

const mapDispatchToProps = dispatch => ({
  toggleUnit:() => dispatch(toggleUnitAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
