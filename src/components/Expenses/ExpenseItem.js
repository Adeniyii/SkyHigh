import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // State adds reactivity to our application
  // Hooks can only be used directly in components, not nested in loops, or other functions
  // State changes triggers component re-evaluation for the specific scoped component alone
  // usestate only uses the default value passed to it on the first component render (on initialization)
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Clicked!");
    console.log(title);
  };

  /**
   * How react renders jsx, under the hood.
   *
   * React.createElement('div', {}, ...children)
   */

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
