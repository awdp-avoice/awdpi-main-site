import React from "react";
import styles from "src/components/Map/Map.module.css";
import { Mulish } from "@next/font/google";
import { Poppins } from "@next/font/google";
import MapChart from "../MapChart/MapChart";

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

export const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <MapChart />
      <div className={styles.title}>TITLE</div>
      <div className={styles.content}>
        Contribute wit us on this transformative journey to shape an equitable
        and inclusive future together.
      </div>
    </div>
  );
};
