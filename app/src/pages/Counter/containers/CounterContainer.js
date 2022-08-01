import React, { PureComponent } from "react";

import Counter from "../../../components/Counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incremetedValue = state.countValue + 1;
      return {
        countValue: incremetedValue,
      };
    });
  };
  handleReset = () => {
    this.setState({
      countValue: 0,
    });
  };
  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementedValue = state.countValue - 1;
        return {
          countValue: decrementedValue,
        };
      });
    }
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
