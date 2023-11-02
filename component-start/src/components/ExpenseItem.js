import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 28)
  const expenseTitle = "Car insurance"
  const expenseAmount = 294.12

  return (
    <div className="expense-item">
      <div>{props.date.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;