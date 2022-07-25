import { useState, useCallback } from "react";

export const useCounter = (defaultValue, allNegative = false) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((state) => {
      const value = state <= 0 && allNegative ? 1 : 0;

      return (state = value);
    });
  }, []);

  const handleReset = useCallback(() => {
    setCount(defaultValue);
  }, []);

  const handleRemove = useCallback(() => {}, []);

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleRemove,
  };
};
