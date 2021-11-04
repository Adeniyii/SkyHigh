import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  /**
   * How react renders jsx, under the hood.
   *
   * React.createElement('div', {}, ...children)
   */

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate month={month} day={day} year={year} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
