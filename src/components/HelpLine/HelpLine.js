import React from "react";
import styles from "src/components/HelpLine/HelpLine.module.css";
import { Mulish } from "@next/font/google";
import { Poppins } from "@next/font/google";
import { Lato } from "@next/font/google";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export const HelpLine = () => (
  <div className={styles.helpLineContainer}>
    <div className={styles.officeCard}>
      <h2>Help Line UK</h2>
      <div>
        <p>Company name </p>
        <p>Company Position</p>
        <p>Street Name</p>
        <p>City</p>
        <p>Postcode</p>
        <p>UK</p>
      </div>
      <div>
        <p>Call: +44 16 89 87 66 34</p>
        <p>Email: helplineservice@awdp.com</p>
        <p>Fax: +44 16 89 87 38 00</p>
      </div>
      <div>
        <p>Hours of operation: </p>
        <p>Monday - Friday 8.45am to 5pm</p>
      </div>
    </div>
    <div className={styles.officeCard}>
      <h2>Help Line China</h2>
      <div>
        <p>Company name </p>
        <p>Company Position</p>
        <p>Street Name</p>
        <p>City</p>
        <p>Postcode</p>
        <p>UK</p>
      </div>
      <div>
        <p>Call: +44 16 89 87 66 34</p>
        <p>Email: helplineservice@awdp.com</p>
        <p>Fax: +44 16 89 87 38 00</p>
      </div>
      <div>
        <p>Hours of operation: </p>
        <p>Monday - Friday 8.45am to 5pm</p>
      </div>
    </div>
    <div className={styles.officeSelect}>
      <h2>Worldwide Offices</h2>
      <p>Lookup details for global contacts</p>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-custom-1"
          className={styles.dropdownButton}
        >
          <div>Please select</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
          >
            <path
              d="M8.54171 11.8337C7.74071 11.157 8.30801 10 9.44079 10H18.5594C19.6922 10 20.2594 11.157 19.4585 11.8337L14.8992 15.6854C14.4026 16.1049 13.5975 16.1049 13.101 15.6854L8.54171 11.8337Z"
              fill="#1F1F1F"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dropdownMenu}>
          <Dropdown.Item eventKey="1">China Office</Dropdown.Item>
          <Dropdown.Item eventKey="2">UK Office</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);
