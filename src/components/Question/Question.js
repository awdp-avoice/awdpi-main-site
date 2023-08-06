import React, { useState } from "react";
useState
import styles from "./Question.module.css";
import { Mulish } from '@next/font/google'

const mulish = Mulish({
    subsets:['latin'],
    variable: '--font-mulish',
    weight: ['600','700']
  })


export const Question = () => {
   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };
   const items = [
    {
      question: "How do I become a volunteer?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "What type of work can a volunteer do?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "What type of work can a volunteer do?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];
   return (
      <div className={styles.questionList}>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)} className={styles.questionBtn}>{item.question}</button>
               {index === activeIndex && <p className={styles.answer}>{item.answer}</p>}
            </div>
         ))}
         
      </div>
   );
  };