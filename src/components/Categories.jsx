import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.header}>
        <h2>Shop By Categories</h2>
        <a href="#">See all Categories &rarr;</a>
      </div>
      <div className={styles.categoriesContianer}>
        <div className={styles.category}>
          <img
            src="computer-accessories-category.jpg"
            alt="Computer accessories Category"
          />
          <h3>Computer Accessories</h3>
        </div>
        <div className={styles.category}>
          <img
            src="health-and-personal-care-catefory.jpg"
            alt="Health and personal care Category"
          />
          <h3>Health & Personal Care</h3>
        </div>
        <div className={styles.category}>
          <img
            src="beauty-products-category.jpg"
            alt="Beauty products Category"
          />
          <h3>Beauty Products</h3>
        </div>
        <div className={styles.category}>
          <img
            src="sports-and-outdoors-category.jpg"
            alt="Sports and Outdoors category"
          />
          <h3>Sports and Outdoors</h3>
        </div>
      </div>
    </section>
  );
}
