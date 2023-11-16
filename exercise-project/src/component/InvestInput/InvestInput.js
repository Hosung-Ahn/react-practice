import styles from "./InvestInput.module.css";
import {useState} from "react";

function InvestInput(props) {
  const [enteredValue, setEnteredValue] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    "duration": ""
  })

  const [isValid, setIsValid] = useState(true)

  const changeHandler = event => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    setEnteredValue(prevState => {
      return {
        ...prevState,
        [inputId]: inputValue
      }
    })
  }


  const submitHandler = event => {
    event.preventDefault();
    if (enteredValue["current-savings"] === "" ||
        enteredValue["yearly-contribution"] === "" ||
        enteredValue["expected-return"] === "" ||
        enteredValue["duration"] === "") {
      return;
    }
    props.calulateHandler(enteredValue);
  }

  const resetHandler = () => {
    setEnteredValue({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      "duration": ""
    })

    props.resetHandler();
  }

  return (
      <form className={styles.form} onSubmit={submitHandler} onReset={resetHandler}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={changeHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={changeHandler}/>
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={changeHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={changeHandler}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
  );
}

export default InvestInput;