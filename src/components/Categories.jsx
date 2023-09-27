import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import SectionHeader from "./SectionHeader";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <SectionHeader title="Shop By Categories" link="See all Categories" />
      <div className={styles.categoriesContianer}>
        <Link className={styles.category}>
          <img
            src="computer-accessories-category.jpg"
            alt="Computer accessories Category"
          />
          <h3>Computer Accessories</h3>
        </Link>
        <Link className={styles.category}>
          <img
            src="health-and-personal-care-catefory.jpg"
            alt="Health and personal care Category"
          />
          <h3>Health & Personal Care</h3>
        </Link>
        <Link className={styles.category}>
          <img
            src="beauty-products-category.jpg"
            alt="Beauty products Category"
          />
          <h3>Beauty Products</h3>
        </Link>
        <Link className={styles.category}>
          <img
            src="sports-and-outdoors-category.jpg"
            alt="Sports and Outdoors category"
          />
          <h3>Sports and Outdoors</h3>
        </Link>
      </div>
    </section>
  );
}
