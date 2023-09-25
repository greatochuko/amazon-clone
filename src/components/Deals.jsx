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
];

export default function Deals() {
  return (
    <div className={styles.deals}>
      <div className={styles.header}>
        <h2>Deals on electronics, gadgets & accessories</h2>
        <a href="#">Explore all deals</a>
      </div>
      <div className={styles.dealsContainer}>
        <button className="left">
          <img src="arrow-left.png" alt="arrow left" />
        </button>
        {deals.map((deal, index) => (
          <Deal key={index} deal={deal} />
        ))}
        <button className={styles.right}>
          <img src="arrow-right.png" alt="arrow left" />
        </button>
      </div>
    </div>
  );
}
