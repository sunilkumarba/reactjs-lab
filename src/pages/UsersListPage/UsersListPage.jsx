import UserFilter from "components/UserFilter";
import UsersList from "components/UsersList";
import { useState } from "react";

const USERS_LIST = ["Sunil", "Kumar", "BaskCoder", "Testinger"];

export default function UsersListPage() {
  const [filteredUsers, setFilteredUsers] = useState(USERS_LIST);

  const handleFiltering = (searchTerm) => {
    const fl = USERS_LIST.filter((u) => u.includes(searchTerm));
    setFilteredUsers(fl);
  };

  return (
    <>
      <h1>Users List</h1>
      <UserFilter onChange={handleFiltering} />
      <UsersList users={filteredUsers} />
    </>
  );
}
