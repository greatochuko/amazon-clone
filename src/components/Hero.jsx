import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <button className={styles.prevBtn}>&lt;</button>
      <button className={styles.nextBtn}>&gt;</button>
      <div className={styles.container}>
        <div className={styles.category}>
          <h2>Shop Computers & accessories</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            fugiat!
          </p>
          <a href="#">View More</a>
        </div>
        <div className={styles.product}>
          <img src="heroProduct2.png" alt="Product image" />
          <div className={styles.productDetails}>
            <p className={styles.productCategory}>Computers and Accecories</p>
            <h4 className={styles.productName}>
              Apple 2022 MacBook Air M2 Chip
            </h4>
            <p className={styles.review}>5 STARS</p>
            <h3 className={styles.price}>$979.00</h3>
            <a href="#" className={styles.viewMore}>
              View More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
