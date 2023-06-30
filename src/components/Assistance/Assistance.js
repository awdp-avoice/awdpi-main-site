import React from "react";
import styles from "src/components/Assistance/Assistance.module.css"
import { Aid } from "../Aid/Aid";

const data = [
    {
        id:1,
        img:"img/LegalAid.png",
        title: "Legal Aid",
        description:"dadklfdajlbhieandlgadnglbif"
    },
    {
        id:2,
        img:"img/Language.png",
        title: "Language Support",
        description:"dadklfdajlbhieandlgadnglbif"
    },
    {
        id:3,
        img:"img/FinancialAid.png",
        title: "Financial Support",
        description:"dadklfdajlbhieandlgadnglbif"
    },
    {
        id:4,
        img:"img/Psych.png",
        title: "Psychological Counselling",
        description:"dadklfdajlbhieandlgadnglbif"
    }
]

export const Assistance = ({assistanceText}) => (

    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p className={styles.assistanceText}>{assistanceText}</p>
        </div>
        <div className={styles.aids}>
            {data.map(item=>(
                <Aid item={item} key={item.id}/>
            )

            )}
        </div>
    </div>
)