import { useState } from "react";
import Faq from "./Faq";
import styles from "./ProductFaqs.module.css";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit nesciunt inventore voluptatem alias rem amet cupiditate hic vitae possimus asperiores, non cumque animi ea libero optio quidem eveniet quasi?",
    id: 1,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur 2?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit nesciunt inventore voluptatem alias rem amet cupiditate hic vitae possimus asperiores, non cumque animi ea libero optio quidem eveniet quasi?",
    id: 2,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur 3?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reprehenderit nesciunt inventore voluptatem alias rem amet cupiditate hic vitae possimus asperiores, non cumque animi ea libero optio quidem eveniet quasi?",
    id: 3,
  },
];

export default function ProductFaqs() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className={styles.productFaqs}>
      {faqs.map((faq) => (
        <Faq
          key={faq.id}
          faq={faq}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </div>
  );
}
