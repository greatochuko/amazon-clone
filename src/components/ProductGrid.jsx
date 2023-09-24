import Product from "./Product";
import styles from "./ProductGrid.module.css";
import SectionHeader from "./SectionHeader";

const products = [1, 2, 3, 4, 5];

export default function ProductGrid() {
  return (
    <div className={styles.productGrid}>
      <SectionHeader title="Recently Viewed" link="See More" />
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product} />
        ))}
      </div>
    </div>
  );
}
