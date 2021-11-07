import React from "react";
import styles from "./Backdrop.module.css";

export const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onExitErrorModal} />;
};
