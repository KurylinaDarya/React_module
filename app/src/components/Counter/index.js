import styles from "./index.module.scss";

import PropTypes from "prop-types";

import { memo } from "react";

import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../router/routeNames";

const Counter = ({
  countValue,
  onDecrement,
  onReset,
  onIncrement,
  onRemove,
  isEven,
  id,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "#bccefb" : "c6beee" }}
    >
      <div className={styles.screen}>{countValue}</div>
      {countValue > 0 && (
        <div className={styles.screen}>{isEven ? "even" : "odd"}</div>
      )}
      <div className={styles.buttonsArea}>
        <button
          onClick={() => onDecrement(id)}
          className={styles.controlButton}
        >
          -
        </button>
        <button onClick={() => onReset(id)} className={styles.controlButton}>
          Reset
        </button>
        <button
          onClick={() => onIncrement(id)}
          className={styles.controlButton}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(id)}
        className={styles.controlButton}
        style={{ float: "right" }}
      >
        Remove counter
      </button>
      <Link to={ROUTE_NAMES.HOME}>Home</Link>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  isEven: PropTypes.bool,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
  onIncrement: PropTypes.func,
  onRemove: PropTypes.func,
};

export default memo(Counter);
