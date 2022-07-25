import React from "react";

import Counter from "../../../components/Counter";

import { useCounter } from "../../../hooks/useCounter";

const FunctionalCounterContainer = () => {
  const { count, handleDecrement, handleIncrement, handleReset, handleRemove } =
    useCounter(0);

  return (
    <div>
      <Counter
        countValue={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default FunctionalCounterContainer;
