import Card from "components/UI/Card";
import styles from "./Counter.module.css";

export default function Counter(props) {
  return (
    <>
      <Card className={styles["counter-container"]}>Counter</Card>
    </>
  );
}
