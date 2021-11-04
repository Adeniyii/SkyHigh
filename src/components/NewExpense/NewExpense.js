import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onFormSubmit = (payload) => {
    props.onNewExpense({ ...payload, id: Math.random() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default NewExpense;
