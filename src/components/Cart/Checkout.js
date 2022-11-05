import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postcode">Postcode</label>
        <input type="text" id="postcode" />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
