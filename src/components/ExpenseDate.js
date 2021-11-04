import React from "react";

function ExpenseDate(prop) {
  return (
    <div>
      <div>{prop.month}</div>
      <div>{prop.year}</div>
      <div>{prop.day}</div>
    </div>
  );
}

export default ExpenseDate;
