import Product from "./Product";
import styles from "./ProductGrid.module.css";

const products = [
  {
    _id: 1,
    img: "/gaming-chair.png",
    name: "Gaming Chair High Black Racing Computer Chair PU",
    category: "Category",
    rating: 4,
    reviews: 1254,
    price: 123.99,
  },
  {
    _id: 1,
    img: "/gaming-chair.png",
    name: "Gaming Chair High Black Racing Computer Chair PU",
    category: "Category",
    rating: 4,
    reviews: 1254,
    price: 123.99,
  },
  {
    _id: 1,
    img: "/gaming-chair.png",
    name: "Gaming Chair High Black Racing Computer Chair PU",
    category: "Category",
    rating: 4,
    reviews: 1254,
    price: 123.99,
  },
  {
    _id: 1,
    img: "/gaming-chair.png",
    name: "Gaming Chair High Black Racing Computer Chair PU",
    category: "Category",
    rating: 4,
    reviews: 1254,
    price: 123.99,
  },
  {
    _id: 1,
    img: "/gaming-chair.png",
    name: "Gaming Chair High Black Racing Computer Chair PU",
    category: "Category",
    rating: 4,
    reviews: 1254,
    price: 123.99,
  },
];

export default function ProductGrid({ children, style }) {
  // const products = Array.from(Array(number).keys());

  return (
    <div className={styles.productGrid} style={style}>
      {children}
      <div className={styles.products}>
        {products.slice(0, 10).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
