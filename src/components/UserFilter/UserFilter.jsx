import styles from "./UserFilter.module.css";

export default function UserFilter(props) {
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={styles["filter-container"]}>
      <input type="text" onChange={handleOnChange} />
    </div>
  );
}
