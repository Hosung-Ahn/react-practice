import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
      <div className={styles.users}>
        <ul>
          {props.users.map(user => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
          ))}
        </ul>
      </div>
  );
}

export default UsersList;