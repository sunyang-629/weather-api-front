import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import Container from "./Container.js";

class App extends React.Component {
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
        <Container />
      </div>
    );
  }
}

export default App;
