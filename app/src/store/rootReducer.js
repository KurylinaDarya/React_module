import { combineReducers } from "redux";

import { todoListReduser } from "../pages/ReduxTodoList/reducers";

export const rootReducer = combineReducers({
  todoListManager: todoListReduser,
});
