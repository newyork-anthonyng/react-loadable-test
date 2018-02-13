import React from "react";
import Loading from "./Loading";
import Loadable from "react-loadable";

const LoadableHidden = Loadable({
  loader: () => import("./Hidden"),
  loading: Loading
});

class Second extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle hidden</button>
        {!this.state.hidden && <LoadableHidden />}
      </div>
    );
  }
}

export default Second;
