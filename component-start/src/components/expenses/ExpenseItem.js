import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseInfo(props) {
  return <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">{props.amount}</div>
  </div>;
}

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
      <div className="expense-item">
        <div>
          <ExpenseDate date={expenseDate}/>
        </div>
        <ExpenseInfo title={expenseTitle} amount={expenseAmount}/>
      </div>
  );
}

export default ExpenseItem;