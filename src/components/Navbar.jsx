// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dalyco-logo-negro-nobg.png';
import { useAuth } from '../context/AuthContext.jsx';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav 
      className="header-nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f0efef",
        padding: "10px 20px",
        position: "relative",   // asegura que se posicione bien
        zIndex: 10              // lo pone por encima del overlay de Inicio
      }}
    >
      <img 
        className="logo" 
        src={logo} 
        alt="Logo Dalyco" 
        style={{ width: "150px", height: "auto" }} 
      />
      <ul 
        className="nav-links" 
        style={{ display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}
      >
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        {user ? (
          <>
            <li><span style={{ fontWeight: 600 }}>Hola, {user.email}</span></li>
            <li>
              <button 
                onClick={logout} 
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/inicio-sesion" id="red-productos">Iniciar sesión</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;