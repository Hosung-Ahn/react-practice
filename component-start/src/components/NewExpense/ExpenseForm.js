import "./ExpenseForm.css";
import {useState} from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title : "",
  //   amount : "",
  //   date : ""
  // })


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title : event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, title : event.target.value}
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount : event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, amount : event.target.value}
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date : event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, date : event.target.value}
    // })
  }

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={(event) => {
              inputChangeHandler("title", event.target.value)
            }}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default ExpenseForm;