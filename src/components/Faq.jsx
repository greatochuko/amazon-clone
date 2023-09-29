import styles from "./Faq.module.css";

export default function Faq({ faq, isActive, setIsActive }) {
  return (
    <div
      className={`${styles.faq}  ${isActive === faq.question && styles.active}`}
      onClick={() =>
        setIsActive((active) => (active === faq.question ? "" : faq.question))
      }
    >
      <div className={styles.question}>{faq.question}</div>
      <div className={`${styles.answer}`}>{faq.answer}</div>
    </div>
  );
}
