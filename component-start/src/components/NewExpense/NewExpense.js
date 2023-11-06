import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  return (
      <div className="new-expense">
        <ExpenseForm></ExpenseForm>
      </div>
  );
}

export default NewExpense;
