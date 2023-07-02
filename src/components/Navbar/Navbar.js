import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Navbar.module.css"
import SecondPage from '@/pages/[locale]/second-page';
import { InputGroup, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export const NavigationBar = () => {
  const routeChange = () => {
    window.location.href = "https://www.google.com/";
  }
  return (

    // <div className={styles.navbar}>
    //   <div className={styles.left}>
    //     <img src="img/AWDPIlogo.png" alt="AWDPIlogo" className={styles.logo}></img>
    //     <div className={styles.searchBar}>
    //       <SearchIcon className={styles.SearchIcon}></SearchIcon>
    //       <input type="text" className={styles.searchInput}  />
    //     </div>
    //   </div>
    //   <div className={styles.center}>
    //     <div className={styles.item}>
    //       <Link href="second-page">Programs</Link>
    //       <ExpandMoreIcon></ExpandMoreIcon>
    //     </div>
    //     <div className={styles.item}>
    //       <Link href="second-page">About</Link>
    //     </div>
    //     <div className={styles.item}>
    //       <Link href="second-page">Contact</Link>
    //     </div>
    //   </div>
    //   <div className={styles.right}>
    //     <img src="img/placeHolder.png" className={styles.placeHolder}/>
    //     <CloseIcon className={styles.CloseIcon} onClick={routeChange}></CloseIcon>
    //   </div>
    // </div>

    <Navbar expand="lg" className={styles.navbar} >
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
            <InputGroup.Text >
              <SearchIcon className={styles.SearchIcon} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              aria-label="Search"
            ></Form.Control>
          </InputGroup>
          
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={styles.item}>Home</Nav.Link>

            <NavDropdown title={"Programs"} id="navbarScrollingDropdown" className={styles.item}>
              <NavDropdown.Item href="#action3" className={styles.item}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.item}>
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className={styles.item}>About</Nav.Link>
            <Nav.Link href="#action2" className={styles.item}>Contact</Nav.Link>
          </Nav>
          <div className={styles.right}>
            <img src="img/placeHolder.png" className={styles.placeHolder} />
            <CloseIcon className={styles.CloseIcon} onClick={routeChange}></CloseIcon>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
