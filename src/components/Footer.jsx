// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#f0efef', padding: '1rem', textAlign: 'center' }}>
      <small>© {new Date().getFullYear()} Dalyco. Todos los derechos reservados.</small>
    </footer>
  );
}

export default Footer;