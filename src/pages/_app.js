import React from "react"
import "../styles/globals.css"
import { appWithTranslation } from 'next-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)
