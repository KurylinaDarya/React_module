import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CountersManagerContainer from "../pages/CountersManager/container/CountersManagerContainer";

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
        path={ROUTE_NAMES.COUNTERS_MANAGER}
        element={<CountersManagerContainer />}
      />
    </Routes>
  );
};

export default Router;
