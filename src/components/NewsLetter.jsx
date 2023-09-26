import { useRef } from "react";
import styles from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <div className={styles.newsLetter}>
      <div className={styles.text}>
        <h2 className={styles.heading}>Subscribe to Our News Letter</h2>
        <p>
          Discover Amazon&apos;s Best Deals: Your Gateway to Savings and More!
        </p>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@example.com"
          />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <img src="news-letter.png" alt="news letter" />
    </div>
  );
}
