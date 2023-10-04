import styles from "./ProductWireframe.module.css";

export default function ProductWireframe() {
  return (
    <div className={styles.product}>
      <div className={styles.img}></div>
      <div className={styles.details}>
        <div className={styles.category}></div>
        <div className={styles.description}></div>
        <div className={styles.description}></div>
        <div className={styles.price}></div>
      </div>
    </div>
  );
}
