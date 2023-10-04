import styles from "./Rating.module.css";

export default function Rating({ rating = 5, maxRating = 5, reviews, style }) {
  let numberArray = Array.from(Array(maxRating).keys());
  return (
    <div className={styles.rating} style={style}>
      <div className={styles.stars}>
        {numberArray.map((a, index) =>
          rating > index ? (
            <img src="/star.png" alt="star" key={index} />
          ) : (
            <img src="/gray-star.png" alt="star" key={index} />
          )
        )}
      </div>
      {reviews && <div className={styles.reviews}>({reviews})</div>}
    </div>
  );
}
