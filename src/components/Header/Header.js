import Head from 'next/head'
import React from 'react'
import styles from "src/components/Header/Header.module.css"
import { Mulish } from '@next/font/google'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets:['latin'],
  variable: '--font-poppins',
  weight: ['500']
})
const mulish = Mulish({
  subsets:['latin'],
  variable: '--font-mulish',
  weight: ['900']
})


export const Header = ({ heading, title, headerText}) => (
  <div className={styles.header}>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 className={styles.headerTitle}>{heading}</h1>
    <p className={styles.headerText}>{headerText}</p>
  </div>
)
