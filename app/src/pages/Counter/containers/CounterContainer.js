import React, { PureComponent } from "react";

import Counter from "../components/Counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incremetedValue = state.countValue + 1;
      return {
        countValue: incremetedValue,
        isEven: incremetedValue % 2 === 0 ? `even` : `odd`,
      };
    });
  };
  handleDecrement = () => {
    this.setState((prevState) => {
      const decrementedValue = Math.max(prevState.countValue - 1, 0);
      return {
        countValue: decrementedValue,
        isEven: decrementedValue % 2 === 0 ? `even` : `odd`,
      };
    });
  };
  handleReset = () => {
    this.setState({
      countValue: this.state.countValue === 0,
      isEven: this.state.isEven === false,
    });
  };
  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        isEven={this.state.isEven}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
      />
    );
  }
}

export default CounterContainer;
