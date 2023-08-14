import React from "react";
import styles from "src/components/Assistance/Assistance.module.css";
import { Aid } from "../Aid/Aid";
import { Container, Row, Col } from "react-bootstrap";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500"],
});

const data = [
  {
    id: 1,
    img: "static/img/LegalAid.png",
    title: "Legal Aid",
    description: "dadklfdajlbhieandlgadnglbif",
  },
  {
    id: 2,
    img: "static/img/Language.png",
    title: "Language Support",
    description: "dadklfdajlbhieandlgadnglbif",
  },
  {
    id: 3,
    img: "static/img/FinancialAid.png",
    title: "Financial Support",
    description: "dadklfdajlbhieandlgadnglbif",
  },
  {
    id: 4,
    img: "static/img/Psych.png",
    title: "Psychological Counselling",
    description: "dadklfdajlbhieandlgadnglbif",
  },
];

export const Assistance = ({ assistanceText }) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <p className={styles.assistanceText}>{assistanceText}</p>
    </div>
    <div className={styles.aids}>
      <Container fluid>
        <Row>
          {data.map((item) => (
            <Col lg={3} md={6} key={item.id}>
              <Aid item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </div>
);
