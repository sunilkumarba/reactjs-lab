import Card from "components/UI/Card";
import useCounter from "hooks/useCounter";
import styles from "./Counter.module.css";

export default function Counter({ step = 1 }) {
  const counter = useCounter(step);

  return (
    <>
      <Card className={styles["counter-container"]}>{counter}</Card>
    </>
  );
}
