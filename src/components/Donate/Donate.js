import React from "react";
import { useState } from "react";
import styles from "src/components/Donate/Donate.module.css";
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

export const Donate = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  const [volunteer, setVolunteer] = useState(false);
  const onVolHover = () => {
    setVolunteer(true);
  };
  const onVolLeave = () => {
    setVolunteer(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.donateText}>
        Contribute wit us on this transformative journey to shape an equitable
        and inclusive future together.
      </div>
      <div className={styles.donateTitle}>
        <a href="" onMouseEnter={onHover} onMouseLeave={onLeave}>
          DONATE
        </a>
        {hover ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="341"
            height="74"
            viewBox="0 0 341 74"
            fill="none"
          >
            <path
              d="M339.536 40.5355C341.488 38.5829 341.488 35.4171 339.536 33.4645L307.716 1.64466C305.763 -0.307961 302.597 -0.307961 300.645 1.64466C298.692 3.59728 298.692 6.76311 300.645 8.71573L328.929 37L300.645 65.2843C298.692 67.2369 298.692 70.4027 300.645 72.3553C302.597 74.308 305.763 74.308 307.716 72.3553L339.536 40.5355ZM0 42H336V32H0V42Z"
              fill="#FF5678"
            />
          </svg>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.donateSubtitle}>
        <a href="" onMouseEnter={onVolHover} onMouseLeave={onVolLeave}>
          BECOME VOLUNTEERS
        </a>
        {volunteer ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="197"
            height="74"
            viewBox="0 0 197 74"
            fill="none"
          >
            <path
              d="M195.536 40.5355C197.488 38.5829 197.488 35.4171 195.536 33.4645L163.716 1.64466C161.763 -0.307961 158.597 -0.307961 156.645 1.64466C154.692 3.59728 154.692 6.76311 156.645 8.71573L184.929 37L156.645 65.2843C154.692 67.2369 154.692 70.4027 156.645 72.3553C158.597 74.308 161.763 74.308 163.716 72.3553L195.536 40.5355ZM0 42H192V32H0V42Z"
              fill="#FF5678"
            />
          </svg>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
