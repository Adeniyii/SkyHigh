import React from "react";

export const Backdrop = (props) => {
  return (
    <div
      onClick={props.onExitErrorModal}
      style={{
        backgroundColor: "red",
        opacity: "0.1",
        height: "100vh",
        width: "100vw",
      }}
    >
      {props.children}
    </div>
  );
};
