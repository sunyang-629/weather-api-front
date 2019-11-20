import React from "react";

function Nav(props) {
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

        <button className="temp-switch">
          <i
            className="fa fa-thermometer-empty"
            aria-hidden="true"
            style={{ paddingRight: "5px" }}
          ></i>
          <sup>&deg;</sup>C
        </button>
      </div>
    </nav>
  );
}

export default Nav;
