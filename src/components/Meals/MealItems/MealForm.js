import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealForm.module.css";

function MealForm(props) {
  const [validState, setValidState] = useState(true);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setValidState(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!validState && <p> please enter a valid value </p>}
    </form>
  );
}

export default MealForm;
