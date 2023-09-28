import styles from "./ProductDetails.module.css";

import Deals from "../components/Deals";
import Rating from "../components/Rating";
import { useState } from "react";

export default function ProductDetails() {
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
    <div className={styles.productDetails}>
      <div className={styles.productDetailsContainer}>
        <div className={styles.productImages}>
          <div className={styles.mainImage}>
            <img src="/gaming-chair.png" alt="gaming chair" />
          </div>
          <div className={styles.imageNav}>
            <img src="/gaming-chair.png" alt="gaming chair" />
            <img src="/gaming-chair.png" alt="gaming chair" />
            <img src="/gaming-chair.png" alt="gaming chair" />
          </div>
        </div>
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
          <h2 className={styles.productName}>
            Category Gaming Chair High Black Racing Computer Chair PU
          </h2>
          <Rating reviews={1254} style={{ marginTop: "1rem" }} />
          <div className={styles.colors + " " + styles.spec}>
            <h4 className={styles.header}>Color:</h4>
            <button
              className={styles.color}
              style={{ backgroundColor: "#75432f" }}
            ></button>
            <button
              className={styles.color}
              style={{ backgroundColor: "#ccc" }}
            ></button>
            <button
              className={styles.color}
              style={{ backgroundColor: "#eee" }}
            ></button>
            <button
              className={styles.color}
              style={{ backgroundColor: "#333" }}
            ></button>
            <button
              className={styles.color}
              style={{ backgroundColor: "#5b7d81" }}
            ></button>
          </div>
          <div className={styles.size + " " + styles.spec}>
            <h4 className={styles.header}>Size:</h4>

            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
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
            <button
              className={styles.likeBtn}
              onClick={() => setLiked((l) => !l)}
            >
              {liked ? (
                <img src="/filled-heart.png" alt="like" />
              ) : (
                <img src="/open-heart.png" alt="like" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Deals />
    </div>
  );
}
