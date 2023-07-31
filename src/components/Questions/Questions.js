import React from "react";
import styles from "src/components/Questions/Questions.module.css"
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


export const Questions = () => (

    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p className={styles.questionText}>Get to know more about our donation process， and learn how we will protect you.</p>
            <div className={styles.questionTitle}>Questions</div>
        </div>
        
    </div>
)