import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { add, minus } from "./redux/actions/action.js";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.min}>-</button>
        <br />
        {this.props.sum}
        <br />
        {this.props.rr}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: state.count,
    rr: state.result,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(add()),
    min: () => dispatch(minus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
