import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

import Counter from "../../../../components/Counter";

const CountCountersLayout = ({
  counters,
  handleCounterRemove,
  handleCounterCreate,
  handleCounterReset,
  sumCounters,
  totalSum,
}) => {
  return (
    <div>
      <h1>Count Counters</h1>
      <button onClick={handleCounterCreate} className={styles.controlButton}>
        Add Counter
      </button>
      <button onClick={handleCounterReset} className={styles.controlButton}>
        Reset
      </button>
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            index={counter.id}
            onReset={handleCounterReset}
            onRemove={handleCounterRemove}
          />
        ))}
      </div>
      <div className={styles.screen}>Counters:{sumCounters}</div>
      <div className={styles.screen}>Total:{totalSum}</div>
    </div>
  );
};

CountCountersLayout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      isEven: PropTypes.bool,
      onReset: PropTypes.func,
    })
  ),
  handleCounterCreate: PropTypes.func.isRequired,
  handleCounterReset: PropTypes.func.isRequired,
  sumCounters: PropTypes.func,
  totalSum: PropTypes.func,
};

export default CountCountersLayout;
