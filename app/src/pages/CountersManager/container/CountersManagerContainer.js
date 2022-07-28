import React, { useCallback, useState } from "react";

import CountersManagerLayout from "../components/CountersManagerLayout";

import { v4 as uuid } from "uuid";

const CountersManagerContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };
    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 === 0
              ? counter.countValue + 1
              : counter.countValue,
        };
      });
      return [...updatedCounters, newCounter];
    });
  };

  const handleCounterReset = () => {
    setCounters([]);
  };

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const targetCounter = countersCopy.find((counter) => counter.id === id);
      targetCounter.countValue -= 1;
      return countersCopy;
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const targetCounter = countersCopy.find((counter) => counter.id === id);
      targetCounter.countValue = 0;
      return countersCopy;
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const targetCounter = countersCopy.find((counter) => counter.id === id);
      targetCounter.countValue += 1;
      return countersCopy;
    });
  }, []);

  const handleRemove = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];

      const counterIndexToRemove = countersCopy.findIndex(
        (counter) => counter.id === id
      );
      countersCopy.splice(counterIndexToRemove, 1);

      return countersCopy.map(({ id, countValue }) => {
        return {
          id,
          countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
        };
      });
    });
  }, []);

  const totalSum = counters.reduce(
    (sum, { countValue }) => sum + countValue,
    0
  );

  return (
    <CountersManagerLayout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleCounterReset={handleCounterReset}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleIncrement={handleIncrement}
      handleRemove={handleRemove}
      totalSum={totalSum}
    />
  );
};

export default CountersManagerContainer;
