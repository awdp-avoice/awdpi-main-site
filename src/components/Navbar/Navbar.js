import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Navbar.module.css";
import SecondPage from "@/pages/[locale]/second-page";
import {
  InputGroup,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  variable: '--font-poppins',
  weight: ['500']
})

export const NavigationBar = () => {
  const routeChange = () => {
    window.location.href = "https://www.google.com/";
  };
  return (

    <Navbar expand="lg" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            src="img/AWDPIlogo.png"
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
            <NavDropdown
              title={"Programs"}
              id="navbarScrollingDropdown"
              className={styles.firstItem}
            >
              <NavDropdown.Item href="#action3" className={styles.innerItem}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.innerItem}>
                Another action
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2" className={styles.secondItem}>
              About
            </Nav.Link>

            <Nav.Link href="#action2" className={styles.thirdItem}>
              Contact
            </Nav.Link>
          </Nav>

          <div className={styles.right}>
            <img src="img/placeHolder.png" className={styles.placeHolder} />
            <div className={styles.CloseIcon}>
              <span>X</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
