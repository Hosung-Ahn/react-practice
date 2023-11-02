import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
    {title: "Toilet Paper", amount: 94.12, date: new Date(2021, 5, 12)},
    {title: "New TV", amount: 799.49, date: new Date(2021, 5, 12)},
    {title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)}
  ]
  return (
      <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses}/>
      </div>
  );
}

export default App;
