import { useRef, useState } from "react";
import styles from "./ClickCounter.module.css";

export default function ClickCounter({ start }) {
  const { current: initialState } = useRef({ start });
  const [count, setCount] = useState(start);

  const handleIncrementClick = () => {
    setCount((pc) => pc + 1);
  };

  const handleReset = () => {
    setCount(initialState.start);
  };

  return (
    <div className={styles["click-counter-container"]}>
      <button
        className={styles["btn-counter"]}
        onClick={handleIncrementClick}
        title="Increment count"
      >
        {count}
      </button>

      <button
        className={styles["btn-reset"]}
        onClick={handleReset}
        title="Reset count"
      >
        Reset
      </button>
    </div>
  );
}
