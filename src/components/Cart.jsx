import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.tableHeader}>
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
      </div>
      <div className={styles.cartItems}>
        {cart.map((productId) => (
          <CartItem productId={productId} key={productId} />
        ))}
      </div>
    </div>
  );
}
