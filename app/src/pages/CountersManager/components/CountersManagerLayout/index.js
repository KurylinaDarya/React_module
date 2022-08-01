import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

import Counter from "../../../../components/Counter";

const CountersManagerLayout = ({
  counters,
  handleCounterCreate,
  handleCounterReset,
  handleDecrement,
  handleReset,
  handleIncrement,
  handleRemove,
  totalSum,
}) => {
  return (
    <div>
      <h1 className={styles.counterText}>Counters Manager</h1>
      <button onClick={handleCounterCreate} className={styles.controlButton}>
        Add Counter
      </button>
      <button onClick={handleCounterReset} className={styles.controlButton}>
        Reset Counter
      </button>
      <div>
        {counters.map(({ id, countValue }) => (
          <Counter
            countValue={countValue}
            id={id}
            key={id}
            onDecrement={handleDecrement}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <h2>
        <p className={styles.counterText}>Counters Amount: {counters.length}</p>
        <p className={styles.counterText}>Counters Sum: {totalSum}</p>
      </h2>
    </div>
  );
};

CountersManagerLayout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    })
  ).isRequired,
};
export default CountersManagerLayout;
