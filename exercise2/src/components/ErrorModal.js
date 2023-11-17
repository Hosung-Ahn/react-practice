import styles from "./ErrorModal.module.css";
import Button from "./Button";

function ErrorModal(props) {
  return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onConfirm} text="Okay"/>
          </footer>
        </div>
      </div>
  );
}

export default ErrorModal;