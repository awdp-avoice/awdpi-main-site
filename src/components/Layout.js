import { useTranslation } from 'next-i18next'

import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { NavigationBar } from './Navbar/Navbar';

export const Layout = ({ children }) => {
  const { t } = useTranslation(['common', 'footer'])

  return (
    <>  
      <NavigationBar/>
      <Header heading={t('h1')} title={t('title')} text = {t('text')}/>
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="my-10">{children}</main>
      </div> */}
      <div className="mx-auto container">
        <main className="my-10">{children}</main>
      </div>
      <Footer />
    </>
  )
};
