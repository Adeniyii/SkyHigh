import React from "react";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UserList.module.css";

export const UserList = ({ users }) => {
  return (
    <div className={styles.users}>
      <ul>
        {users.length > 0 &&
          users.map((user, index) => {
            return (
              <UserCard key={index} username={user.username} age={user.age} />
            );
          })}
      </ul>
    </div>
  );
};
