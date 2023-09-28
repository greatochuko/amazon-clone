import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <div>
      <div className={styles.productImages}>
        <img src="/gaming-chair.png" alt="gaming chair" />
      </div>
      <div className={styles.productDetailsText}></div>
    </div>
  );
}
