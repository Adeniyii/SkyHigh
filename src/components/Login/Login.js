import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        emailValue: action.payload,
        emailIsValid: action.payload.includes("@"),
      };

    case "PWORD_INPUT":
      return {
        ...state,
        passwordValue: action.payload,
        passwordIsValid: action.payload.trim().length > 6,
      };

    default:
      return state;
  }
};

const Login = (props) => {
  const [login, loginDispatch] = useReducer(formReducer, {
    emailValue: "",
    passwordValue: "",
    emailIsValid: null,
    passwordIsValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(null);

  const { emailIsValid, passwordIsValid } = login;

  useEffect(() => {
    const formTimer = setTimeout(() => {
      console.log("SET FORM IS VALID");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEAR TIMEOUT");
      clearTimeout(formTimer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    loginDispatch({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    loginDispatch({ type: "PWORD_INPUT", payload: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(login.emailValue, login.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            login.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={login.emailValue}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            login.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={login.passwordValue}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
