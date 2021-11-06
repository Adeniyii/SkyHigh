import React from "react";
import styles from "./ErrorModal.module.css";

export const ErrorModal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Invalid Input</h2>
      </div>
      <p className={styles.content}>{props.message}</p>
      <button onClick={props.onExitErrorModal} className={styles.actions}>
        Okay
      </button>
    </div>
  );
};
