import { useEffect, useState } from "react";
import Product from "./Product";
import styles from "./ProductGrid.module.css";
import SectionHeader from "./SectionHeader";
import ProductWireframe from "./ProductWireframe";

export default function ProductGrid({ children, style, category }) {
  const [products, setProducts] = useState([]);

  const isLoading = !products.length;
  // console.log(products);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data.filter((p) => p.category === category).slice(0, 5));
      // setProducts(data);
    }
    getProducts();
  }, [category]);

  return (
    <div className={styles.productGrid} style={style}>
      <SectionHeader title="Shop Headphones" link="See More" />
      <div className={styles.products}>
        {isLoading ? (
          <>
            <ProductWireframe /> <ProductWireframe /> <ProductWireframe />
            <ProductWireframe /> <ProductWireframe />
          </>
        ) : (
          products
            .slice(0, 10)
            .map((product) => <Product key={product._id} product={product} />)
        )}
      </div>
    </div>
  );
}
