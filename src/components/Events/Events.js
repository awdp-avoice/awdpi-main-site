import React from "react";
import styles from "src/components/Events/Events.module.css"
import { Event } from "../Event/Event";
import { Container, Row, Col } from 'react-bootstrap';

const data = [
    {
        id:1,
        date:"22.06",
        title:"Title1",
        description1: "hdajalkgjaihgelngldndlivelnd",
        location:"Location1",
        description2:"hdajalkgjaihgelngldndlivelnd"

    },
    {
        id:2,
        date:"22.07",
        title:"Title2",
        description1: "hdajalkgjaihgelngldndlivelnd",
        location:"Location2",
        description2:"hdajalkgjaihgelngldndlivelnd"

    },
    {
        id:3,
        date:"22.08",
        title:"Title3",
        description1: "hdajalkgjaihgelngldndlivelnd",
        location:"Location3",
        description2:"hdajalkgjaihgelngldndlivelnd"

    }
]

export const Events = () => (

    <div className={styles.container}>
        <div className={styles.title}>Upcoming events</div>
        <div className={styles.events}>
            <Container fluid>
                <Row>
                {data.map(item=>(
                    <Col lg={4} key={item.id}>
                        <Event item={item} key={item.id}/>
                    </Col>
                )
                )}
                </Row>
            </Container>
        </div>
    </div>
)