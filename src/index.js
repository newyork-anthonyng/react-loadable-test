import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loadable from "react-loadable";
import { BrowserRouter } from "react-router-dom";

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  );
});
