import styles from "./ProductImages.module.css";

export default function ProductImages() {
  return (
    <div className={styles.productImages}>
      <div className={styles.mainImage}>
        <img src="/gaming-chair.png" alt="gaming chair" />
      </div>
      <div className={styles.imageNav}>
        <img src="/gaming-chair.png" alt="gaming chair" />
        <img src="/gaming-chair.png" alt="gaming chair" />
        <img src="/gaming-chair.png" alt="gaming chair" />
      </div>
    </div>
  );
}
