import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length < 1)
    return (
      <p className="expenses-list__fallback">No expenses for {props.filter}.</p>
    );

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
