// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 5rem - 4rem)' }}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;