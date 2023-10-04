import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Rating from "./Rating";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";

export default function Product({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  function handleLike(e) {
    e.preventDefault();
    setIsLiked((curr) => !curr);
  }

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(addToCart(product._id));
  }

  function handleRemoveFromCart(e) {
    e.preventDefault();
    dispatch(removeFromCart(product._id));
    console.log("removing");
  }

  return (
    <Link to={`/product/${product._id}`} className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productCategory}>{product.category}</p>
        <h4 className={styles.productName}>{product.name.substr(0, 40)}...</h4>
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
      <button
        className={
          cart.includes(product._id)
            ? styles.addToCartBtn + " " + styles.removeFromCartBtn
            : styles.addToCartBtn
        }
        onClick={
          cart.includes(product._id) ? handleRemoveFromCart : handleAddToCart
        }
      >
        {cart.includes(product._id) ? "Remove from cart" : "Add to cart"}
      </button>
    </Link>
  );
}
