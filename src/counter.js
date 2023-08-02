import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  resetCount = () => {
    this.setState((prevState) => ({
      count: prevState.count =0,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>State Concept</h2>
        <p>Counter: {count}</p>
        <button style={{backgroundColor:"Green", fontSize:"15px"}} onClick={this.incrementCount}>Increment</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{backgroundColor:"White", fontSize:"15px"}}onClick={this.resetCount}>Reset</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{backgroundColor:"Red", fontSize:"15px"}} onClick={this.decrementCount}>Decrement</button>      
      </div>
    );
  }
}

export default Counter;
