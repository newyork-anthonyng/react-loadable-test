import React from "react";
import Loading from "./Loading";
import Loadable from "react-loadable";
import { Route, Link } from "react-router-dom";

const LoadableHome = Loadable({
  loader: () => import("./Home"),
  loading: Loading
});

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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/first">First</Link></li>
          <li><Link to="/second">Second</Link></li>
        </ul>

        <Route exact path="/" component={LoadableHome} />
        <Route path="/first" component={LoadableFirst} />
        <Route path="/second" component={LoadableSecond} />
      </div>
    );
  }
};

export default App;
