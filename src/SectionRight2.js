import React from "react";

function SectionRight2() {
  return (
    <section className="weather-forecast">
      <div className="forecast__switch">
        <button className="forecast__switch_0 switch-active">5 items</button>
        <button className="forecast__switch_1">10 items</button>
      </div>

      <div className="weather-forecast__row">
        <span className="weather-forecast__day">Fri</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i> 10:00
        </span>
        <span className="weather-forecast__high">19 c</span>
        <span className="weather-forecast__low">8 c</span>
      </div>
      <div className="weather-forecast__row">
        <span className="weather-forecast__day">Fri</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i> 13:00
        </span>
        <span className="weather-forecast__high">19 c</span>
        <span className="weather-forecast__low">8 c</span>
      </div>

      <div className="weather-forecast__row">
        <span className="weather-forecast__day">Fri</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i> 16:00
        </span>
        <span className="weather-forecast__high">19 c</span>
        <span className="weather-forecast__low">8 c</span>
      </div>
    </section>
  );
}

export default SectionRight2;
