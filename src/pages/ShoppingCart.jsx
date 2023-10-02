import { useSelector } from "react-redux";
import styles from "./ShoppingCart.module.css";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.shoppingCart}>
      <div className={styles.header}>
        <h1>Shopping Cart </h1>
        <Link to="/">
          <span>&larr;</span>Continue Shopping
        </Link>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartItems}>
          <div className={styles.tableHeader}>
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
          {cart.map((productId) => (
            <CartItem productId={productId} key={productId} />
          ))}
        </div>
      </div>
      <div className={styles.checkout}>Checkout</div>
    </div>
  );
}
