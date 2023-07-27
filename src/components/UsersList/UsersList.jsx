import styles from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <>
      <ul className={styles["users-list"]}>
        {props.users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </>
  );
}
