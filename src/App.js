import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   count: 0
  // };

  // increaseCount = () => {
  //   const { count } = this.state;
  //   this.setState({ count: count + 1 });
  // };

  // decreaseCount = () => {
  //   const { count } = this.state;
  //   this.setState({ count: count - 1 });
  // };

  render() {
    return (
      <div className="App">
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.increaseCount}>Increase</button>
        <button onClick={this.props.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: "INCREASE" }),
    decreaseCount: () => dispatch({ type: "DECREASE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
