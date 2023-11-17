import styles from "./Button.module.css";
function Button(props) {
  const classes = `${styles.button} ${props.className}`;
  return (
      <button className={classes} type={props.type} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;