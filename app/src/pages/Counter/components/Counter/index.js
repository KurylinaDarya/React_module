import React from "react";

import styles from "./index.module.scss";

const Counter = ({ countValue, isEven, onIncrement, onDecrement, onReset }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>{countValue}</div>
      <div className={styles.screen}>{isEven}</div>
      <div className={styles.buttonsArea}>
        <button onClick={onDecrement} className={styles.controlButton}>
          -
        </button>
        <button onClick={onReset} className={styles.controlButton}>
          Reset
        </button>
        <button onClick={onIncrement} className={styles.controlButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
