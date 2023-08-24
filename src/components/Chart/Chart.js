import React, { PureComponent } from "react";
import styles from "src/components/Chart/Chart.module.css";
import { Mulish } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { AreaCharts } from "../AreaCharts/AreaCharts";

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

export const Chart = () => (
  <div className={styles.mapContainer}>
    <div className={styles.chartContainer}>
      <div className={styles.chartTitle}>
        Supporting Asian women across 30 different countries by safeguarding
        wellbeing and empowering development
      </div>
      <div className={styles.chartSection}>
        <AreaCharts />
        <div className={styles.chartRight}>
          <div className={styles.chartRightTitle}>Title Title Title</div>
          <div className={styles.chartRightContent}>
            lanmkjdlikdoa;nkdjsolid jlijllandk;l
            ‘kal;dmflkdoamod’lx;’sajo’alxma’ l;soamdlfjkduxina;dijaid.
          </div>
          <button className={styles.chartRightBtn}>Explore more</button>
        </div>
      </div>
    </div>
  </div>
);
