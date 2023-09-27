import Product from "./Product";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ number, children, style }) {
  const products = Array.from(Array(number).keys());

  return (
    <div className={styles.productGrid} style={style}>
      {children}
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product} />
        ))}
      </div>
    </div>
  );
}
