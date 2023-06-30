import Link from 'next/link';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Navbar.module.css"
import SecondPage from '@/pages/[locale]/second-page';

export const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.left}>
      <img src="img/AWDPIlogo.png" alt="AWDPIlogo" className={styles.logo}></img>
      <SearchIcon className={styles.SearchIcon}></SearchIcon>
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
      <CloseIcon className={styles.CloseIcon}></CloseIcon>
    </div>
  </div>
)
