import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import InicioSesion from './pages/InicioSesion.jsx';
import Menu from './pages/Menu.jsx';
import Carrito from './pages/Carrito.jsx';

function App() {
  return (
    <Routes>
      {/* Inicio en "/" */}
      <Route path="/" element={<Layout><Inicio /></Layout>} />

      {/* Otras páginas */}
      <Route path="/inicio-sesion" element={<Layout><InicioSesion /></Layout>} />
      <Route path="/menu" element={<Layout><Menu /></Layout>} />
      <Route path="/carrito" element={<Layout><Carrito /></Layout>} />

      {/* Ruta por defecto */}
      <Route path="*" element={<Layout><Inicio /></Layout>} />
    </Routes>
  );
}

export default App;