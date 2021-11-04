import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(prop) {
  const [filter, setFilter] = useState("2020");

  // Get lifted state from child
  const onNewFilter = (filter) => {
    // set state to equal lifted state
    setFilter(filter);
  };

  console.log(filter);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onNewFilter={onNewFilter} filterValue={filter} />
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
    </div>
  );
}

export default Expenses;
