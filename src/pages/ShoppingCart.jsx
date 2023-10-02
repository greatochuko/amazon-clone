import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

export default function ShoppingCart() {
  return (
    <div className={styles.shoppingCart}>
      <div className={styles.header}>
        <h1>Shopping Cart </h1>
        <Link to="/">
          <span>&larr;</span>Continue Shopping
        </Link>
      </div>
      <div className={styles.content}>
        <Cart />
        <Checkout />
      </div>
    </div>
  );
}
