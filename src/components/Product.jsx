import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.product}>
      <img
        src="gaming-chair.png"
        alt="gaming chair"
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.productCategory}>Category</p>
        <h4 className={styles.productName}>
          Gaming Chair High Black Racing Computer Chair PU
        </h4>
        <p className={styles.rating}>No rating</p>
        <p className={styles.price}>
          $129<span>99</span>
        </p>
      </div>
    </div>
  );
}
