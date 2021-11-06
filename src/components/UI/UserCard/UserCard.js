import React from "react";

export const UserCard = (props) => {
  const adjective = Number.parseInt(props.age, 10) > 1 ? "years" : "year";
  return <li>{`${props.username} (${props.age} ${adjective} old)`}</li>;
};
