import { useState, useCallback } from "react";

export const useCounter = (defaultValue, allNegative = false) => {
  const [count, setCount] = useState(defaultValue);

  const handleDecrement = useCallback(() => {
    setCount((state) => {
      const value = state <= 0 && allNegative ? 1 : 0;

      return (state = value);
    });
  }, []);

  const handleReset = useCallback(() => {
    setCount(defaultValue);
  }, []);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  return {
    count,
    handleDecrement,
    handleReset,
    handleIncrement,
  };
};
