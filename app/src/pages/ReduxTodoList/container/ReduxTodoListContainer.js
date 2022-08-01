import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODOLIST, DELETE_TODOLIST } from "../actions";
import TodoList from "../../TodoList/components/TodoListLayout/TodoList";

const ReduxTodoListContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoListManager.todos);

  const handleAddTask = () => {
    dispatch(ADD_TODOLIST());
  };

  const handleDeleteTask = useCallback((id) => {
    dispatch(DELETE_TODOLIST(id));
  }, []);

  return (
    <div>
      <h1>Todo list:</h1>
      <input
        //   onChange={handleInputChange}
        type="text"
        placeholder="task..."
      />
      <button onClick={handleAddTask} type="submit">
        Add todo
      </button>
      <div>
        {todos.map(({ id, text }, index) => (
          <TodoList
            text={text}
            key={id}
            id={id}
            order={index + 1}
            // toggleTask={handleToggle}
            // onRedact={handleRedact}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxTodoListContainer;
