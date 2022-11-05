import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartState, setCartState] = useState(false);

  const cartStateHandler = () => {
    setCartState((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {cartState && <Cart onShowCart={cartStateHandler} />}
      <Header onShowCart={cartStateHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
