import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Navbar.module.css"
import SecondPage from '@/pages/[locale]/second-page';
import {useNavigate} from "react-router-dom";


export const Navbar = () => {
  const routeChange = () => {
    window.location.href = "https://www.google.com/";
  }
  return (

  <div className={styles.navbar}>
    <div className={styles.left}>
      <img src="img/AWDPIlogo.png" alt="AWDPIlogo" className={styles.logo}></img>
      <div className={styles.searchBar}>
        <SearchIcon className={styles.SearchIcon}></SearchIcon>
        <input type="text" className={styles.searchInput}  />
      </div>
    </div>
    <div className={styles.center}>
      <div className={styles.item}>
        <Link href="second-page">Programs</Link>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>
      <div className={styles.item}>
        <Link href="second-page">About</Link>
      </div>
      <div className={styles.item}>
        <Link href="second-page">Contact</Link>
      </div>
    </div>
    <div className={styles.right}>
      <img src="img/placeHolder.png" className={styles.placeHolder}/>
      <CloseIcon className={styles.CloseIcon} onClick={routeChange}></CloseIcon>
    </div>
  </div>
  )
}
