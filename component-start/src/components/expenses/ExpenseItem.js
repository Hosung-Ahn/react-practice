import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import {useState} from "react";

function ExpenseInfo(props) {
  return <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">{props.amount}</div>
  </div>;
}

function ExpenseItem(props) {
  const expenseDate = props.date;
  const [expenseTitle, setExpenseTitle] = useState(props.title);
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setExpenseTitle("Updated!");
    console.log(expenseTitle);
  }


  return (
      <Card className="expense-item">
        <div>
          <ExpenseDate date={expenseDate}/>
        </div>
        <ExpenseInfo title={expenseTitle} amount={expenseAmount}/>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
  );
}

export default ExpenseItem;