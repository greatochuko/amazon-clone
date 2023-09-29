import styles from "./Review.module.css";
import Rating from "./Rating";

export default function Review({ review }) {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <img src={review.user.img} alt={review.user.name} />
        <h4>{review.user.name}</h4>
      </div>
      <div className={styles.heading}>
        <Rating rating={review.rating} />
        <p>Wow, i am impressed</p>
      </div>
      <p className={styles.reviewDetail}>{review.review}</p>
    </div>
  );
}
