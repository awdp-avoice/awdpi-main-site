import React from "react";
import styles from "src/components/Aid/Aid.module.css"



export const Aid = ({item}) => (
    
    <div className={styles.aid} >
        <img src={item.img} alt={item.title} className={styles.img}/>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
    </div>

)