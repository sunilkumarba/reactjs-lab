import Card from "components/UI/Card";
import Counter from "components/Counter";
import styles from "./CountersPage.module.css";

export default function CountersPage(props) {
  return (
    <>
      <h1>Counters</h1>

      <Card className={styles["counters-container"]}>
        <Counter />
        <Counter />
      </Card>
    </>
  );
}