import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [confirm, setConfirm] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setConfirm(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          // this allows you to control which items are sent to the handler
        />
      ))}
    </ul>
  );
  return (
    <Modal onShowCart={props.onShowCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
        {confirm && <Checkout />}
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onShowCart}>
          Close
        </button>
        {Boolean(cartCtx.items.length) && (
          <button className={styles.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
