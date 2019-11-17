import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";

function Container() {
  return (
    <div className="weather-channel__container">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default Container;
