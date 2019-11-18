import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function Container() {
  return (
    <div className="weather-channel__container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Container;
