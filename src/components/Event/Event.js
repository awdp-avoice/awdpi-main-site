import React from "react";
import styles from "src/components/Event/Event.module.css"
import { Card } from "react-bootstrap";


export const Event = ({ item }) => (

    <div >
        <Card className={styles.event}>
            <Card.Body>
                <Card.Title className={styles.date}>{item.date}</Card.Title>
                <Card.Subtitle className={styles.title}>{item.title}</Card.Subtitle>
                <Card.Text className={styles.description}>
                    {item.description1}
                </Card.Text>
                <Card.Subtitle className={styles.title}>{item.location}</Card.Subtitle>
                <Card.Text className={styles.description}>
                    {item.description2}
                </Card.Text>
                <Card.Link href="#" className={styles.description}>More details</Card.Link>
            </Card.Body>
        </Card>
    </div>

)