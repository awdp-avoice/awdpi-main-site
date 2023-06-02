import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Header />
    <main className="my-10">{children}</main>
    <Footer />
  </div>
);

export default Layout;
