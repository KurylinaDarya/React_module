import React from "react";
import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const TodoList = ({
  id,
  text,
  order,
  todo,
  onToggleTask,
  onRedact,
  onDeleteTask,
}) => {
  return (
    <div key={id} className={styles.textList}>
      <p>
        {" "}
        {order}. {text}{" "}
      </p>
      <div
        className={todo.complete ? "todo-text strike" : "todo-text"}
        onClick={() => onToggleTask(id)}
      >
        <input type="checkbox" className={styles.controlButton} />
        <button
          onClick={() => onRedact(id, text)}
          className={styles.controlButton}
        >
          edit
        </button>
        <button
          onClick={() => onDeleteTask(id)}
          className={styles.controlButton}
        >
          delet
        </button>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  order: PropTypes.number,
  onDeleteTask: PropTypes.func,
  onRedact: PropTypes.func,
  onToggleTask: PropTypes.func,
};
export default memo(TodoList);
