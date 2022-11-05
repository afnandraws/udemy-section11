import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

//FORWARD REFS ARE IMPORTANT FOR CUSTOM COMPONENTS. THIS ALLOWS REF TO BE USED AS IT WOULD BE NORMALLY.
