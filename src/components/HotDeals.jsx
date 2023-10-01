import { Link } from "react-router-dom";
import styles from "./hotDeals.module.css";

const hotDeals = [
  { _id: 1, img: "kitchen.jpg", name: "Kitchen Deals", discount: 10 },
  { _id: 2, img: "toys.jpg", name: "Toys", discount: 30 },
  { _id: 3, img: "fashion.jpg", name: "Fashion Deals", discount: 25 },
  {
    _id: 4,
    img: "gaming-accessories.webp",
    name: "Shop Gaming Accessories",
    discount: 15,
  },
];

export default function QuickAccess() {
  return (
    <div className={styles.hotDeals}>
      {hotDeals.map((deal) => (
        <Link className={styles.hotDeal} key={deal._id}>
          <img src={deal.img} alt="Kitchen category" />
          <div className={styles.text}>
            <h2>{deal.name}</h2>
            <p>
              {deal.discount >= 25
                ? `Huge sale ${deal.discount}% off`
                : `Get ${deal.discount}% off`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
