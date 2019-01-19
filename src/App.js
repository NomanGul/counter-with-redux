import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

  increaseCount = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  decreaseCount = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };

  render() {
    return (
      <div className="App">
        <p>Count: {this.state.counter}</p>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default App;
