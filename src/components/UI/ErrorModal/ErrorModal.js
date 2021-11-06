import React from "react";

export const ErrorModal = (props) => {
  return (
    <div>
      <h1>Invalid Input</h1>
      <p>{props.message}</p>
      <button onClick={props.onExitErrorModal}>Okay</button>
    </div>
  );
};
