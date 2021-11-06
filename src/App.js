import React, { useState } from "react";

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

  return (
    <div>
      <UserForm
        onUserFormSubmit={onUserFormSubmit}
        onInvalidSubmission={onInvalidSubmission}
      />
      {!errorMessage && <UserList users={users} />}
      {errorMessage && (
        <Backdrop onExitErrorModal={onExitErrorModal}>
          <ErrorModal
            message={errorMessage}
            onExitErrorModal={onExitErrorModal}
          />
        </Backdrop>
      )}
    </div>
  );
};

export default App;
