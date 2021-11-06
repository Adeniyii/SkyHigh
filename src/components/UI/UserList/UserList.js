import React from "react";
import { UserCard } from "../UserCard/UserCard";

export const UserList = ({ users }) => {
  return (
    <div>
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
