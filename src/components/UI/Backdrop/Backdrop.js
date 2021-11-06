import React from "react";
import styles from "./Backdrop.modal.css";

export const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onExitErrorModal}>
      {props.children}
    </div>
  );
};
