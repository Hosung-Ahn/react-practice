import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString()
    }
    console.log(expenseData);
  }

  return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={props.onAddExpense}></ExpenseForm>
      </div>
  );
}

export default NewExpense;
