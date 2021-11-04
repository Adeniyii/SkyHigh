import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

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

  const displayedExpense =
    filteredExpenses.length < 1 ? (
      <p style={{ color: "#fff" }}>No expenses for {filter}.</p>
    ) : (
      filteredExpenses.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          ></ExpenseItem>
        );
      })
    );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onNewFilter={onNewFilter} filterValue={filter} />
        {displayedExpense}
      </Card>
    </div>
  );
}

export default Expenses;
