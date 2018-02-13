import React from "react";
import Loading from "./Loading";
import Loadable from "react-loadable";

const LoadableFirst = Loadable({
  loader: () => import("./First"),
  loading: Loading
});

const LoadableSecond = Loadable({
  loader: () => import("./Second"),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <div>
        <LoadableFirst />
        <LoadableSecond />
      </div>
    );
  }
};

export default App;
