import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CountCountersContainer from "../pages/CountCounters/container/CountCountersContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route
        path={ROUTE_NAMES.COUNT_COUNTERS}
        element={<CountCountersContainer />}
      />
    </Routes>
  );
};

export default Router;
