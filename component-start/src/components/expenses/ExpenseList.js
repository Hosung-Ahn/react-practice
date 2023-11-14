import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";

function ExpenseList(props) {
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  return (
      <div>{props.items.map(expense => (
          <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}/>
      ))}</div>
  );
}

export default ExpenseList;