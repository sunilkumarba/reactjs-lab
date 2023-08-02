import Card from "components/UI/Card";
import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({ start = 0, step = 1 }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((pc) => pc + step);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Card className={styles["counter-container"]}>{count}</Card>
    </>
  );
}
