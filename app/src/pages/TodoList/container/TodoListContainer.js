import React, { useCallback, useState } from "react";

import TodoListForm from "../components/TodoListLayout/TodoListForm";

import { v4 as uuid } from "uuid";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(inputValue);
    setInputValue("");
  };

  const handleAddTask = useCallback(() => {
    setTodos((state) => {
      const todosCopy = [...state];
      const newItem = {
        id: uuid(),
        task: inputValue,
        complete: false,
      };
      todosCopy.push(newItem);
      return todosCopy;
    });
  });
  console.log(handleAddTask);

  //   const handleAddTask = (inputValue) => {
  //     if (inputValue) {
  //       const newItem = {
  //         id: uuid(),
  //         task: inputValue,
  //         complete: false,
  //       };
  //       setTodos([...todos, newItem]);
  //     }
  //     console.log(setTodos);
  //   };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const handleRedact = () => {};

  const handleDeleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <TodoListForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask}
        handleToggle={handleToggle}
        handleRedact={handleRedact}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TodoListContainer;
