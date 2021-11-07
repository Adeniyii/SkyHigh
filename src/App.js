import React, { useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";
import { UserList } from "./components/User/UserList/UserList";
import { UserForm } from "./components/User/UserForm/UserForm";
import { ErrorModal } from "./components/UI/ErrorModal/ErrorModal";
import { Backdrop } from "./components/UI/Backdrop/Backdrop";

const App = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const onUserFormSubmit = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const onInvalidSubmission = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  const onExitErrorModal = () => {
    setErrorMessage(null);
  };

  const ErrorPortal = (props) => {
    return (
      <>
        {createPortal(
          <Backdrop onExitErrorModal={props.onExitErrorModal} />,
          document.getElementById("backdrop-portal")
        )}
        {createPortal(
          <ErrorModal
            message={props.errorMessage}
            onExitErrorModal={props.onExitErrorModal}
          />,
          document.getElementById("modal-portal")
        )}
      </>
    );
  };

  return (
    <div>
      <UserForm
        onUserFormSubmit={onUserFormSubmit}
        onInvalidSubmission={onInvalidSubmission}
      />
      {!errorMessage && <UserList users={users} />}
      {errorMessage && (
        <ErrorPortal
          onExitErrorModal={onExitErrorModal}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default App;
