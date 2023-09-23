import styles from "./hotDeal.module.css";

export default function QuickAccess() {
  return (
    <div className={styles.hotDeals}>
      <div className={styles.hotDeal}>
        <img src="kitchen.jpg" alt="Kitchen category" />
        <div className={styles.text}>
          <h2>Kitchen Deals</h2>
          <p>Get 10% off</p>
        </div>
      </div>
      <div className={styles.hotDeal}>
        <img src="toys.jpg" alt="Kitchen category" />
        <div className={styles.text}>
          <h2>Toys</h2>
          <p>Huge sale 30% off</p>
        </div>
      </div>
      <div className={styles.hotDeal}>
        <img src="fashion.jpg" alt="Kitchen category" />
        <div className={styles.text}>
          <h2>Fashion Deals</h2>
          <p>Huge sale 25% off</p>
        </div>
      </div>
      <div className={styles.hotDeal}>
        <img src="gaming-accessories.webp" alt="Kitchen category" />
        <div className={styles.text}>
          <h2>Shop Gaming Accessories</h2>
          <p>Get 15% off</p>
        </div>
      </div>
    </div>
  );
}
