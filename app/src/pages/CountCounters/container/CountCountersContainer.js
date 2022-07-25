import React, { useCallback } from "react";
import { useState } from "react";

import { v4 as uuid } from "uuid";

import CountCountersLayout from "../components/CountCountersLayout";

const CountCountersContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = useCallback(() => {
    setCounters((state) => {
      const countersCopy = [...state];
      const id = uuid();
      const newCounter = {
        id,
      };
      countersCopy.push(newCounter);

      return countersCopy;
    });
  }, []);

  const handleCounterRemove = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];

      const itemIndexToRemove = countersCopy.findIndex(
        (counter) => counter.id === id
      );

      countersCopy.splice(itemIndexToRemove, 1);
      return countersCopy;
    });
  }, []);

  const handleCounterReset = useCallback(() => {
    setCounters([]);
  }, []);

  //   const totalSum = useCallback(() => {
  //     setCounters((state) => {
  //       const countersCopy = [...state];

  //       const sumAllValues = countersCopy.reduce(
  //         (sum, counter) => sum + counter,
  //         0
  //       );
  //       return sumAllValues;
  //     });
  //   }, []);

  return (
    <CountCountersLayout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleCounterReset={handleCounterReset}
      handleCounterRemove={handleCounterRemove}
    />
  );
};

export default CountCountersContainer;
