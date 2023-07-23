import React from "react";
import styles from "src/components/Donate/Donate.module.css"
import { Mulish } from '@next/font/google'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    variable: '--font-poppins',
    weight: ['500']
  })
const mulish = Mulish({
    subsets:['latin'],
    variable: '--font-mulish',
    weight: ['600','700']
  })


export const Donate = () => (

    <div className={styles.container}>
        <div className={styles.donateText}>Contribute wit us on this transformative journey to shape an equitable and inclusive future together.</div>
        <div className={styles.donateTitle}>DONATE</div>
        <div className={styles.donateSubtitle}>BECOME VOLUNTEERS</div>
    </div>
)