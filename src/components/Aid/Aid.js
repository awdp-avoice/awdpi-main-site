import React from "react";
import styles from "src/components/Aid/Aid.module.css"
import { Mulish } from '@next/font/google'

const mulish = Mulish({
    subsets:['latin'],
    variable: '--font-mulish',
    weight: ['600']
  })


export const Aid = ({item}) => (
    
    <div className={styles.aid} >
        <img src={item.img} alt={item.title} className={styles.img}/>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
    </div>

)