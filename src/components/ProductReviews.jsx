import styles from "./ProductReviews.module.css";
import Review from "./Review";

const reviews = [
  {
    user: { name: "Great", img: "/user.png", id: 1 },
    rating: 4,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsum facilis quisquam ut odio voluptates alias, fugiat asperiores consequatur, repellat, harum inventore ullam beatae! Saepe maxime tempora maiores asperiores architecto.",
  },
  {
    user: { name: "Great2", img: "/user.png", id: 2 },
    rating: 3,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsum facilis quisquam ut odio voluptates alias, fugiat asperiores consequatur, repellat, harum inventore ullam beatae! Saepe maxime tempora maiores asperiores architecto.",
  },
  {
    user: { name: "Great3", img: "/user.png", id: 3 },
    rating: 5,
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsum facilis quisquam ut odio voluptates alias, fugiat asperiores consequatur, repellat, harum inventore ullam beatae! Saepe maxime tempora maiores asperiores architecto.",
  },
];

export default function ProductReviews() {
  return (
    <div className={styles.productReviews}>
      {reviews.map((review) => (
        <Review review={review} key={review.user.id} />
      ))}
    </div>
  );
}
