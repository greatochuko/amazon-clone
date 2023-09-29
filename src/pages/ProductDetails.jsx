import styles from "./ProductDetails.module.css";

import Deals from "../components/Deals";
import ProductImages from "../components/ProductImages";
import ProductDetailsText from "../components/ProductDetailsText";

export default function ProductDetails() {
  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetailsContainer}>
        <ProductImages />
        <ProductDetailsText />
      </div>
      <Deals />
    </div>
  );
}
