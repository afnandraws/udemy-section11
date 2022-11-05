import React, { Fragment, useContext, useState, useEffect } from "react";

import styles from "./Header.module.css";
import CartContext from "../../store/cart-context";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // const uniqueItemCount = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // })

  const uniqueItemCount = new Set(cartCtx.items).size;
  // this lets you see how many unique items are in the bag

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <button className={btnClasses} onClick={props.onShowCart}>
          <span>Your Cart </span>
          <span className={styles.badge}>{uniqueItemCount}</span>
        </button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food" />
      </div>
    </Fragment>
  );
}

export default Header;
