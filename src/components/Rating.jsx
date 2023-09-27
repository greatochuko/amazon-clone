import styles from "./Rating.module.css";

export default function Rating({ rating }) {
  let numberArray = Array.from(Array(rating).keys());
  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {numberArray.map((a, index) => (
          <img src="/star.png" alt="star" key={index} />
        ))}
      </div>
      <div className={styles.reviews}>1254 Reviews</div>
    </div>
  );
}
