import styles from "./AddUser.module.css";
import Button from "./Button";
import {useRef, useState} from "react";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredValue, setEnteredValue] = useState({
    name: '',
    age: ''
  })

  const onChangeHandler = (input, value) => {
    setEnteredValue(prevState => {
      return {
        ...prevState,
        [input]: value
      }
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
    if (enteredValue.name.trim().length === 0 || enteredValue.age.trim().length === 0) {
      props.onInvalidInput("Please enter a valid name and age (non-empty values).");
      return;
    }
    if (+enteredValue.age < 1) {
      props.onInvalidInput("Please enter a valid age (> 0).");
      return;
    }
    props.onAddUser(enteredValue);
    setEnteredValue({
      name: '',
      age: ''
    })
  }

  return (
      <div>
        <form className={styles.input} onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredValue.name} ref={nameInputRef}
                 onChange={(event) => {
            onChangeHandler("name", event.target.value)
          }}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredValue.age} ref={ageInputRef}
                 onChange={(event) => {
            onChangeHandler("age", event.target.value)
          }}/>
          <Button type="submit" text="Add User"/>
        </form>
      </div>
  );
};

export default AddUser;