import { useState } from "react";
import styles from "./ProductDetailsText.module.css";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import ProductFaqs from "./ProductFaqs";

export default function ProductDetailsText() {
  const [activeTab, setActiveTab] = useState("info");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const disableDecQuantity = quantity <= 0;

  function handleIncQuantity() {
    setQuantity((q) => q + 1);
  }

  function handleDecQuantity() {
    setQuantity((q) => (q <= 0 ? q : q - 1));
  }

  return (
    <div className={styles.productDetailsText}>
      <nav>
        <ul>
          <li
            className={activeTab === "info" && styles.active}
            onClick={() => setActiveTab("info")}
          >
            Product Information
          </li>
          <li
            className={activeTab === "reviews" && styles.active}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </li>
          <li
            className={activeTab === "faq" && styles.active}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </li>
        </ul>
      </nav>
      {activeTab === "info" && <ProductInfo />}
      {activeTab === "reviews" && <ProductReviews />}
      {activeTab === "faq" && <ProductFaqs />}
      <div className={styles.actions}>
        <button className={styles.addToCartBtn}>Add to Cart</button>
        <div className={styles.quantity}>
          <button onClick={handleDecQuantity} disabled={disableDecQuantity}>
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) =>
              setQuantity((q) =>
                isNaN(e.target.value) ? q : Number(e.target.value)
              )
            }
          />
          <button onClick={handleIncQuantity}>+</button>
        </div>
        <button className={styles.likeBtn} onClick={() => setLiked((l) => !l)}>
          {liked ? (
            <img src="/filled-heart.png" alt="like" />
          ) : (
            <img src="/open-heart.png" alt="like" />
          )}
        </button>
      </div>
    </div>
  );
}
