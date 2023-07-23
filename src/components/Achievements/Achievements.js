import React from "react";
import styles from "src/components/Achievements/Achievements.module.css";
import { Aid } from "../Aid/Aid";
import { Container, Row, Col } from "react-bootstrap";
import AutoPlay from "../Partners/Partners";

export const Achievements = () => (
  <div className={styles.container}>
    <div className={styles.topContainer}>
      <Container fluid>
        <Row>
          <Col lg={3} md={6} className={styles.item}>
            <h1 className={styles.itemNumber}>10</h1>
            <p className={styles.itemName}>Global Communities</p>
          </Col>
          <Col lg={3} md={6} className={styles.item}>
            <h1 className={styles.itemNumber}>3</h1>
            <p className={styles.itemName}>Offline Offices</p>
          </Col>
          <Col lg={3} md={6} className={styles.item}>
            <h1 className={styles.itemNumber}>10+</h1>
            <p className={styles.itemName}>Global Communities</p>
          </Col>
          <Col lg={3} md={6} className={styles.item}>
            <h1 className={styles.itemNumber}>400+</h1>
            <p className={styles.itemName}>Oversea Partners</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} className={styles.item}>
            <h1 className={styles.itemNumber}>400+</h1>
            <p className={styles.itemName}>Oversea Partners</p>
          </Col>
          <Col lg={9} className={styles.item}>
            <AutoPlay></AutoPlay>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);
