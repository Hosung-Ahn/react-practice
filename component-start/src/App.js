import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
    {title: "Toilet Paper", amount: 94.12, date: new Date(2021, 5, 12)},
    {title: "New TV", amount: 799.49, date: new Date(2021, 5, 12)},
    {title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)}
  ]

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
      <div>
        <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
