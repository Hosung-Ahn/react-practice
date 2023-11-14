import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
  const [expenses, setExpenses] = useState(
      [
        {id : "e1", title: "Car Insurance", amount: 294.67, date: new Date(2020, 2, 28)},
        {id : "e2", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 5, 12)},
        {id : "e3", title: "New TV", amount: 799.49, date: new Date(2021, 3, 12)},
        {id : "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 4, 12)}
      ]
  )


  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    setExpenses((prevState) => {
      return [expense, ...prevState];
    })
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
