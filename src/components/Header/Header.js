import Head from 'next/head'
import React from 'react'
import styles from "src/components/Header/Header.module.css"

export const Header = ({ heading, title, headerText}) => (
  <div className={styles.header}>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 className={styles.headerTitle}>{heading}</h1>
    <p className={styles.headerText}>{headerText}</p>
  </div>
)
