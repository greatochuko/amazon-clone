import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Rating from "./Rating";
import { useState } from "react";

export default function Product({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  function handleLike(e) {
    e.preventDefault();
    setIsLiked((curr) => !curr);
  }
  return (
    <Link to={`/product/${product._id}`} className={styles.product}>
      <img
        src={product.img}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.productCategory}>{product.category}</p>
        <h4 className={styles.productName}>{product.name}</h4>
        <Rating rating={5} reviews={1254} />
        <p className={styles.price}>
          $129<span>99</span>
        </p>
      </div>
      <button className={styles.likeBtn} onClick={handleLike}>
        <img
          src={isLiked ? "filled-heart.png" : "/open-heart.png"}
          alt="like"
        />
      </button>
      <button className={styles.addToCartBtn}>Add to cart</button>
    </Link>
  );
}
