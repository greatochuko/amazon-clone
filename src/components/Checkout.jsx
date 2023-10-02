import { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const [activeCard, setActiveCard] = useState("");

  return (
    <div className={styles.checkout}>
      <div className={styles.cardType}>
        <h4 className={styles.title}>Card Type</h4>
        <div className={styles.cardTypes}>
          <div
            className={
              activeCard === "master"
                ? styles.card + " " + styles.active
                : styles.card
            }
            onClick={() => setActiveCard("master")}
          >
            <img src="master-card.png" alt="pay with master card" />
          </div>
          <div
            className={
              activeCard === "american"
                ? styles.card + " " + styles.active
                : styles.card
            }
            onClick={() => setActiveCard("american")}
          >
            <img src="american-express.png" alt="pay with american express" />
          </div>
          <div
            className={
              activeCard === "visa"
                ? styles.card + " " + styles.active
                : styles.card
            }
            onClick={() => setActiveCard("visa")}
          >
            <img src="visa.png" alt="pay with visa card" />
          </div>
          <div
            className={
              activeCard === "paypal"
                ? styles.card + " " + styles.active
                : styles.card
            }
            onClick={() => setActiveCard("paypal")}
          >
            <img src="paypal.png" alt="pay with paypal" />
          </div>
        </div>
      </div>
      <div className={styles.cardName}>
        <h4 className={styles.title}>Name on Card</h4>
        <input type="text" placeholder="e.g. John Doe" />
      </div>
      <div className={styles.cardNumber}>
        <h4 className={styles.title}>Card Number</h4>
        <div className={styles.inputs}>
          <input type="text" placeholder="XXXX" />
          <input type="text" placeholder="XXXX" />
          <input type="text" placeholder="XXXX" />
          <input type="text" placeholder="XXXX" />
        </div>
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardDetail}>
          <h4 className={styles.title}>Expiry Date</h4>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className={styles.cardDetail}>
          <h4 className={styles.title}>CVV</h4>
          <input type="text" placeholder="XXX" />
        </div>
      </div>
      <button className={styles.checkoutBtn}>
        Checkout<span>($154.99)</span>
      </button>
    </div>
  );
}
