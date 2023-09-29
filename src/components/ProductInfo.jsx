import styles from "./ProductInfo.module.css";
import Rating from "./Rating";

export default function ProductInfo() {
  return (
    <div>
      <h2 className={styles.productName}>
        Gaming Chair High Black Racing Computer Chair PU
      </h2>
      <Rating reviews={1254} style={{ marginTop: "1rem" }} />
      <div className={styles.colors + " " + styles.spec}>
        <h4 className={styles.header}>Color:</h4>
        <button
          className={styles.color}
          style={{ backgroundColor: "#75432f" }}
        ></button>
        <button
          className={styles.color}
          style={{ backgroundColor: "#ccc" }}
        ></button>
        <button
          className={styles.color}
          style={{ backgroundColor: "#eee" }}
        ></button>
        <button
          className={styles.color}
          style={{ backgroundColor: "#333" }}
        ></button>
        <button
          className={styles.color}
          style={{ backgroundColor: "#5b7d81" }}
        ></button>
      </div>
      <div className={styles.size + " " + styles.spec}>
        <h4 className={styles.header}>Size:</h4>

        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>
    </div>
  );
}
