import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(prop) {
  return (
    <Card className="expenses">
      {prop.expenseList.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
