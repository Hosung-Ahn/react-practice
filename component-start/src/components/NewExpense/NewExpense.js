import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const [formToggle, setFormToggle] = useState(false);

  const addFormHandler = () => {
    setFormToggle(!formToggle);
  }

  let form = <button onClick={addFormHandler}>Add New Expense</button>;
  if (formToggle) {
    form = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={addFormHandler}/>;
  }

  return (
      <div className="new-expense">
        {form}
      </div>
  );
}

export default NewExpense;
