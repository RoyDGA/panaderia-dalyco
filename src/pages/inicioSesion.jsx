// src/pages/InicioSesion.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/inicio_sesion.css';
import logo from '../assets/dalyco-logo-negro-nobg.png';
import { useAuth } from '../context/AuthContext.jsx';

function InicioSesion() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/menu');
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <>
      {/* Navbar está en Layout */}
      <main>
        <div className="formulario">
          <div className="eslogan">
            <img className="logo-dalyco" src={logo} alt="logo dalyco" />
            <p>Disfruta de pedidos personalizados, promociones exclusivas y el seguimiento en tiempo real de tus pedidos.</p>
          </div>

          <div className="Inicio_sesion">
            <form onSubmit={handleSubmit}>
              <h2>Inicio de sesión</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <input type="email" placeholder="correo@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="contraseña-container">
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>¿Olvidaste tu contraseña? <a href="#">Recupérala aquí</a></p>
              </div>
              <button id="Ingresar" type="submit">Ingresar</button>
            </form>
            <p>¿No tienes una cuenta? <a href="#">Crea una aquí</a></p>
          </div>
        </div>
      </main>
    </>
  );
}

export default InicioSesion;