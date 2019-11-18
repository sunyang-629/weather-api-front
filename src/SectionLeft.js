import React from "react";
import IconUmberella from "./icon/icon-umberella.png";
import IconWind from "./icon/icon-wind.png";
import IconCompass from "./icon/icon-compass.png";

function SectionLeft() {
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">Brisbane</div>
      <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
      <div className="weather-condition__temp">19 c</div>
      <div className="weather-condition__desc">
        <div>
          <img src={IconUmberella} />
          <span className="citem">20%</span>
        </div>
        <div>
          <img src={IconWind} />
          <span className="citem">3 km/h</span>
        </div>
        <div>
          <img src={IconCompass} />
          <span className="citem">NE</span>
        </div>
      </div>
    </section>
  );
}

export default SectionLeft;
