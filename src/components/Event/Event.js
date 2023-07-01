import React from "react";
import styles from "src/components/Event/Event.module.css"



export const Event = ({item}) => (
    
    <div className={styles.event}>
        <div className={styles.container}>
            <time className={styles.date}>{item.date}</time>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description1}</p>
            <h1 className={styles.title}>{item.location}</h1>
            <p className={styles.description}>{item.description2}</p>
        </div>
    </div>

)