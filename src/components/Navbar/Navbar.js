import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import {
  InputGroup,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import { Poppins } from '@next/font/google'
import { Mulish } from '@next/font/google'

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

export const NavigationBar = () => {
  const routeChange = () => {
    window.location.href = "https://www.google.com/";
  };
  return (

    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/static/img/AWDPIlogo.png"
            width="68"
            height="87"
            className="d-inline-block align-top"
            alt="AWDPI logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className={`d-flex ${styles.searchBar}`}>
            <SearchIcon className={styles.SearchIcon} />
            <input className={styles.searchText}></input>
          </InputGroup>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >

            <Dropdown as={NavItem} >
              <Dropdown.Toggle as={NavLink} className={styles.firstItem}>Programs</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className={styles.innerItem}>program1</Dropdown.Item>
                <Dropdown.Item className={styles.innerItem}>program2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
         

            <Nav.Link href="/about" className={styles.secondItem}>
              About
            </Nav.Link>

            <Nav.Link href="#action2" className={styles.thirdItem}>
              Contact
            </Nav.Link>
          </Nav>

          <div className={styles.right}>
            <button className={styles.contributeBtn}>Contribute</button>
            <button className={styles.closeBtn} onClick={routeChange}><span>X</span></button>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
