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
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useState } from "react";
import { Poppins } from "@next/font/google";
import { Mulish } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500"],
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["600", "700"],
});

export const NavigationBar = () => {
  const routeChange = () => {
    window.location.href = "https://www.google.com/";
  };
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/static/img/AWDPIlogo.svg"
            width="120"
            height="60"
            className="ms-auto"
            alt="AWDPI logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className={styles.inputGroup}>
            <div className={styles.searchBar}>
              <SearchIcon className={styles.SearchIcon} />
              <input className={styles.searchText}></input>
            </div>
          </InputGroup>

          <div className={styles.center}>
            <Dropdown
              as={NavItem}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Dropdown.Toggle as={NavLink} className={styles.firstItem}>
                Programs
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.dropMenu}>
                <Dropdown.Item className={styles.innerItem}>
                  Program 1
                </Dropdown.Item>
                <Dropdown.Item className={styles.innerItem}>
                  Program 2
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/about" className={styles.secondItem}>
              About
            </Nav.Link>

            <Nav.Link href="/contact" className={styles.thirdItem}>
              Contact
            </Nav.Link>
          </div>

          <div className={`me-auto, ${styles.right}`}>
            <button className={styles.contributeBtn}>Contribute</button>
            <button className={styles.closeBtn} onClick={routeChange}>
              <span>X</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
