import Card from "components/UI/Card";
import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({ start = 0, step = 1, stop = null }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((pc) => {
        const c = pc + step;

        if (stop !== null && c === stop) clearInterval(intervalId);

        return c;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Card className={styles["counter-container"]}>{count}</Card>
    </>
  );
}
