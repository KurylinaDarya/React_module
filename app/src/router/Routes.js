import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import CountersManagerContainer from "../pages/CountersManager/container/CountersManagerContainer";
import FormContainer from "../pages/Forms/container/FormContainer";
import TodoListContainer from "../pages/TodoList/container/TodoListContainer";
import ReduxTodoListContainer from "../pages/ReduxTodoList/container/ReduxTodoListContainer";

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
      <Route path={ROUTE_NAMES.FORMS} element={<FormContainer />} />
      <Route path={ROUTE_NAMES.TODO_LIST} element={<TodoListContainer />} />
      <Route
        path={ROUTE_NAMES.REDUX_TODO_LIST}
        element={<ReduxTodoListContainer />}
      />
    </Routes>
  );
};

export default Router;
