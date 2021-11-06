import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./UserForm.module.css";

export const UserForm = (props) => {
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  const setUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const setAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length > 0 && age.trim().length > 0) {
      props.onUserFormSubmit({ age, username });
      setAge("");
      setUsername("");
    } else {
      props.onInvalidSubmission(
        "Please enter a valid username or age (non-empty values)"
      );
    }

    if (isNaN(Number.parseInt(age, 10))) {
      props.onInvalidSubmission("Please enter a valid age");
    }
  };

  return (
    <div className={styles.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={username} onChange={setUsernameHandler} />
        <label>Age(Years)</label>
        <input type="text" value={age} onChange={setAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};
