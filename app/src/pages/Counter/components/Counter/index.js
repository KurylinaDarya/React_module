import styles from "./index.module.scss";
import PropTypes from "prop-types";

const Counter = ({ countValue, isEven, onIncrement, onDecrement, onReset }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        countValue % 2 === 0 ? styles.yellowColor : styles.blueColor
      } `}
    >
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

Counter.propTypes = {
  //   countValue: PropTypes.number,
  //   isEven: PropTypes.bool,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
  onIncrement: PropTypes.func,
};
export default Counter;
