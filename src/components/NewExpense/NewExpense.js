import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expanded, setExpanded] = useState(false);

  const onFormSubmit = (payload) => {
    props.onNewExpense({ ...payload, id: Math.random() });
  };

  const clickHandler = (e) => {
    setExpanded((prev) => !prev);
  };

  const formDisplay = expanded ? (
    <ExpenseForm onFormSubmit={onFormSubmit} onCancel={clickHandler} />
  ) : (
    <button onClick={clickHandler}>Add new expense</button>
  );

  return <div className="new-expense">{formDisplay}</div>;
};

export default NewExpense;
