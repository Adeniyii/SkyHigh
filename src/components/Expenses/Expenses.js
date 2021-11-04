import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(prop) {
  const [filter, setFilter] = useState("2020");

  // Get lifted state from child
  // set state to equal lifted state
  const onNewFilter = (filter) => {
    setFilter(filter);
  };

  const filteredExpenses = prop.expenseList.filter((exp) => {
    return filter === exp.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onNewFilter={onNewFilter} filterValue={filter} />
        <ExpensesList items={filteredExpenses} filter={filter} />
      </Card>
    </div>
  );
}

export default Expenses;
