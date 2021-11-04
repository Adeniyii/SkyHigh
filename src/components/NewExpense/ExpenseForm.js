import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Alternative -- Using a single state & handler
  const [comboForm, setComboForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const comboHandler = (e) => {
    setComboForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      ...comboForm,
      date: new Date(comboForm.date),
    };
    props.onFormSubmit(payload);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" onChange={comboHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={comboHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2020-01-01"
            step="2021-11-04"
            onChange={comboHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
