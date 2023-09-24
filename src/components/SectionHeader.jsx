import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, link }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      {link && <a href="#">{link} &rarr;</a>}
    </div>
  );
}
