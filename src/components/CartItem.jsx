import { useState } from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ productId }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncQuantity() {
    setQuantity((curr) => (curr += 1));
  }
  function handleDecQuantity() {
    setQuantity((curr) => (curr > 1 ? (curr -= 1) : curr));
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.productDetails}>
        <img src="/gaming-chair.png" alt="gaming chair" />
        <div className={styles.text}>
          <p className={styles.category}>gaming</p>
          <h4 className="name">
            Gaming Chair High Black Racing Computer Chair PU
          </h4>
          <div className={styles.specs}>
            <p>
              Color: <span>Black</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.quantity}>
        <button onClick={handleDecQuantity} disabled={quantity <= 1}>
          -
        </button>
        <p className={styles.qty}>{quantity}</p>
        <button onClick={handleIncQuantity}>+</button>
      </div>
      <div className={styles.price}>$134.99</div>
      <div className={styles.actionBtns}>
        <img src="open-heart.png" alt="like" className={styles.likeBtn} />
        <img src="trash-icon.svg" alt="delete" className={styles.deleteBtn} />
      </div>
    </div>
  );
}
