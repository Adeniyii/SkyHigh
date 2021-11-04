import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(prop) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{prop.month}</div>
      <div className="expense-date__year">{prop.year}</div>
      <div className="expense-date__day">{prop.day}</div>
    </div>
  );
}

export default ExpenseDate;
