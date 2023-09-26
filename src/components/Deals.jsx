import { useState } from "react";
import Deal from "./Deal";
import styles from "./Deals.module.css";

const deals = [
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
  {
    name: "LG 27-inch FHD Gaming Monitor",
    originalPrice: 299.99,
    discount: 30,
  },
];

export default function Deals() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const maxScrollPercentage = (deals.length - 1) * 18 * -1;
  console.log(scrollPercentage, maxScrollPercentage);

  function scrollRight(e) {
    e.preventDefault();
    setScrollPercentage((sp) => (sp - 76 > maxScrollPercentage ? sp - 76 : sp));
  }
  function scrollLeft(e) {
    e.preventDefault();
    setScrollPercentage((sp) => (sp != 0 ? sp + 76 : 0));
  }

  return (
    <div className={styles.deals}>
      <button className="left" onClick={scrollLeft}>
        <img src="arrow-left.png" alt="arrow left" />
      </button>
      <div className={styles.header}>
        <h2>Deals on electronics, gadgets & accessories</h2>
        <a href="#">Explore all deals</a>
      </div>
      <div className={styles.dealsDiv}>
        <div
          className={styles.dealsContainer}
          style={{ transform: `translateX(${scrollPercentage}vw)` }}
        >
          {deals.map((deal, index) => (
            <Deal key={index} deal={deal} />
          ))}
        </div>
      </div>
      <button className={styles.right} onClick={scrollRight}>
        <img src="arrow-right.png" alt="arrow left" />
      </button>
    </div>
  );
}
