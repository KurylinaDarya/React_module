import PropTypes from "prop-types";

import styles from "./styles.module.scss";

import TodoList from "./TodoList";

const TodoListForm = ({
  handleSubmit,
  handleInputChange,
  todos,
  handleToggle,
  handleRedact,
  handleDeleteTask,
}) => {
  return (
    <div>
      <h1 className={styles.title}>Todo list:</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" placeholder="task..." />
        <button type="submit" className={styles.controlButton}>
          Add todo
        </button>
      </form>
      <div>
        {todos &&
          todos.map(({ id, text }, index) => (
            <TodoList
              text={text}
              key={id}
              id={id}
              order={index + 1}
              toggleTask={handleToggle}
              onRedact={handleRedact}
              onDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
    </div>
  );
};

TodoListForm.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
export default TodoListForm;
