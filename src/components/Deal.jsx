import styles from "./Deal.module.css";

export default function Deal({ deal }) {
  const discountedPrice = ((deal.originalPrice * deal.discount) / 100).toFixed(
    2
  );
  return (
    <a href="#" className={styles.deal}>
      <img src="gaming-monitor.png" alt="gaming monitor" />
      <div className={styles.dealProductDetails}>
        <h4 className={styles.discount}>{deal.discount}% off</h4>
        <h3 className={styles.price}>
          {discountedPrice.toString().split(".")[0]}
          <span className={styles.kobo}>
            {discountedPrice.toString().split(".")[1]}
          </span>
          <span className={styles.originalPrice}>{deal.originalPrice}</span>
        </h3>
        <p className={styles.dealProductName}>{deal.name.slice(0, 20)}...</p>
      </div>
    </a>
  );
}
