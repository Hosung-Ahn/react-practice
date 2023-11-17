import AddUser from "./components/AddUser";
import Card from "./components/Card";
import UsersList from "./components/UsersList";
import {useState} from "react";
import ErrorModal from "./components/ErrorModal";

function App() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const addUserHandler = (enteredValue) => {
    setUsers(prevUsers => {
      return [...prevUsers, {name: enteredValue.name, age: enteredValue.age, id: Math.random().toString()}]
    })
  }

  const onConfirmHandler = () => {
    setError("");
  }

  const onInvalidInputHandler = (message) => {
    setError(message);
  }

  console.log(users);
  const usersListContent = users.length > 0 ? <Card><UsersList users={users}/></Card> : null;

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} onInvalidInput={onInvalidInputHandler}/>
      </Card>
      {usersListContent}
      {error && <ErrorModal title={"Invalid Input"} message={error} onConfirm={onConfirmHandler} /> }
    </div>
  );
}

export default App;
