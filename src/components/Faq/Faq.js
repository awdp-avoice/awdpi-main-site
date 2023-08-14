import React, { useState } from "react";
useState;
import styles from "./Faq.module.css";
import { Mulish } from "@next/font/google";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500"],
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["600", "700"],
});

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const items1 = [
    {
      question: "How can we become a volunteer ?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "How can I get help from AWDP?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "How to donate the project?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Which office should I contact?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "How can we become a volunteer ?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "How can I get help from AWDP?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "How to donate the project?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "Which office should I contact?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>FAQS</h1>

      <div className={styles.questionsContainer}>
        {items1.map((item, index) => (
          <div key={item.title}>
            <button
              onClick={() => handleClick(index)}
              className={styles.questionBtn}
            >
              {item.question}
              {index === activeIndex ? (
                <p>-</p>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11L6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13L11 13V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13L18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11L13 11V6Z"
                    fill="#1F1F1F"
                  />
                </svg>
              )}
            </button>
            {index === activeIndex && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <p className={styles.faqContent}>
        If you have more questions, you may try to contact the local office
        below.
      </p>
    </div>
  );
};
