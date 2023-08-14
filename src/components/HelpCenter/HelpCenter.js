import React from "react";
import styles from "src/components/HelpCenter/HelpCenter.module.css";
import { Mulish } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { InputGroup } from "react-bootstrap";

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

export const HelpCenter = () => (
  <div className={styles.helpCenterContainer}>
    <div className={styles.leftContainer}>
      <h2>Help Center</h2>
      <h1>How can we help you?</h1>
      <p>
        We can instantly give you answers to many frequantly asked questions.
      </p>
      <InputGroup>
        <div className={styles.searchBar}>
          <input className={styles.searchText}></input>
          <img src="/static/img/searchIcon.png" alt="search"></img>
        </div>
      </InputGroup>
    </div>
    <div className={styles.rightContainer}></div>
  </div>
);
