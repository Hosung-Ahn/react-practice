import React  from "react";
import styles from './Input.module.css';
import {useImperativeHandle, useRef} from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });

  return (
      <div
          className={`${styles.control} ${
              props.isValid === false ? styles.invalid : ''
          }`}
      >
        <label htmlFor="email">{props.label}</label>
        <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
      </div>
  );
});

export default Input;