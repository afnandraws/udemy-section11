import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealForm from "./MealForm";
import styles from "./MealItem.module.css";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price}`}</div>
      </div>
      <MealForm onAddToCart={addtoCartHandler} id={props.id}></MealForm>
    </li>
  );
}

// `` is a template literal to combine js code into text displayed such as the dollar sign

export default MealItem;
