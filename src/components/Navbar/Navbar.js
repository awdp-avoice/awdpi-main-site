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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M12.0163 4.25747C12.0163 3.94916 11.8938 3.65347 11.6758 3.43546C11.4578 3.21745 11.1621 3.09497 10.8538 3.09497C10.5455 3.09497 10.2498 3.21745 10.0318 3.43546C9.81379 3.65347 9.69131 3.94916 9.69131 4.25747V6.20737C7.82535 6.24908 5.96308 6.39293 4.11286 6.63827C3.96152 6.65842 3.81563 6.70818 3.68352 6.78472C3.55142 6.86125 3.43568 6.96305 3.34291 7.08431C3.25015 7.20557 3.18218 7.34392 3.14288 7.49145C3.10359 7.63898 3.09373 7.79281 3.11388 7.94415C3.13403 8.09548 3.1838 8.24137 3.26033 8.37348C3.33686 8.50559 3.43866 8.62133 3.55993 8.71409C3.68119 8.80685 3.81953 8.87482 3.96706 8.91412C4.11459 8.95342 4.26842 8.96327 4.41976 8.94312C7.42528 8.5444 10.4614 8.42609 13.4888 8.58972C12.8474 10.7566 11.9634 12.8443 10.8538 14.813C10.2743 13.7852 9.75568 12.7242 9.30071 11.6355C9.17669 11.3591 8.9497 11.142 8.66805 11.0305C8.3864 10.919 8.07235 10.9218 7.79276 11.0384C7.51316 11.155 7.29011 11.3761 7.17109 11.6546C7.05206 11.9332 7.04647 12.2472 7.15551 12.5298C7.80759 14.0913 8.58081 15.5994 9.46811 17.0403C7.81136 19.4616 5.81284 21.6303 3.53471 23.479C3.41095 23.5734 3.30741 23.6917 3.23021 23.8268C3.15302 23.962 3.10375 24.1112 3.08532 24.2658C3.0669 24.4203 3.07969 24.577 3.12295 24.7265C3.1662 24.876 3.23904 25.0153 3.33713 25.1361C3.43523 25.2569 3.55659 25.3568 3.69401 25.4299C3.83144 25.5029 3.98214 25.5476 4.13717 25.5614C4.2922 25.5751 4.44841 25.5575 4.59653 25.5098C4.74465 25.462 4.88167 25.3849 4.99946 25.2832C7.21131 23.4883 9.17939 21.4124 10.8538 19.108C11.0011 19.3126 11.1514 19.5141 11.3033 19.7141C11.4904 19.9595 11.7672 20.1206 12.073 20.1618C12.3788 20.2031 12.6885 20.1212 12.9339 19.9342C13.1793 19.7471 13.3404 19.4703 13.3817 19.1645C13.4229 18.8587 13.3411 18.549 13.154 18.3036C12.8378 17.8913 12.534 17.4697 12.2395 17.0403C13.8247 14.4677 15.0419 11.6858 15.8557 8.77572C16.3362 8.82377 16.8136 8.88112 17.2879 8.94312C17.5935 8.98382 17.9028 8.90143 18.1477 8.71409C18.3926 8.52674 18.553 8.24979 18.5937 7.94415C18.6344 7.6385 18.552 7.32921 18.3647 7.08431C18.1774 6.83941 17.9004 6.67897 17.5948 6.63827C15.7446 6.39245 13.8823 6.2486 12.0163 6.20737V4.25747Z"
                fill="#A7A7A7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1494 12.395C20.3654 12.395 20.5772 12.4552 20.7609 12.5688C20.9446 12.6825 21.093 12.845 21.1895 13.0383L27.777 26.2133C27.8466 26.35 27.8884 26.4992 27.9001 26.6521C27.9118 26.8051 27.893 26.9589 27.845 27.1046C27.797 27.2503 27.7206 27.3851 27.6202 27.5011C27.5198 27.6171 27.3975 27.7122 27.2602 27.7807C27.123 27.8492 26.9735 27.8899 26.8204 27.9004C26.6674 27.9109 26.5137 27.891 26.3684 27.8418C26.2231 27.7926 26.0889 27.7152 25.9737 27.6139C25.8584 27.5126 25.7643 27.3896 25.6969 27.2518L24.4693 24.795H15.8311L14.602 27.2518C14.5345 27.3896 14.4404 27.5126 14.3252 27.6139C14.2099 27.7152 14.0758 27.7926 13.9304 27.8418C13.7851 27.891 13.6315 27.9109 13.4784 27.9004C13.3254 27.8899 13.1759 27.8492 13.0386 27.7807C12.9014 27.7122 12.779 27.6171 12.6786 27.5011C12.5783 27.3851 12.5019 27.2503 12.4538 27.1046C12.4058 26.9589 12.3871 26.8051 12.3988 26.6521C12.4104 26.4992 12.4523 26.35 12.5219 26.2133L19.1094 13.0383C19.2059 12.845 19.3543 12.6825 19.538 12.5688C19.7217 12.4552 19.9334 12.395 20.1494 12.395ZM23.3068 22.47L20.1494 16.1569L16.9936 22.47H23.3068Z"
                fill="#A7A7A7"
              />
            </svg>
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
