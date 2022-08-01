import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const defaultState = {
  todos: [],
};

export const todoListReduser = handleActions(
  {
    [actions.ADD_TODOLIST]: (state, { payload: text }) => {
      const newTodo = {
        id: uuid,
        text,
        complete: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },

    [actions.DELETE_TODOLIST]: (state, { payload: id }) => {
      const stateCopy = [...state.todos];

      const indexToDelete = stateCopy.findIndex((todo) => todo.id === id);

      stateCopy.splice(indexToDelete, 1);

      return {
        ...state,
        todos: stateCopy,
      };
    },
  },
  defaultState
);
