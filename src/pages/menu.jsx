import React, { useState, useEffect } from 'react';
import '../styles/menu.css';
import logo from '../assets/dalyco-logo-negro-nobg.png';
import ProductoCard from '../components/ProductoCard';
import { getProductos } from "../services/api";

// Importar imágenes de panes
import panIntegral from '../assets/pan_integral.webp';
import panArroz from '../assets/pan_arroz.jpg';
import panCenteno from '../assets/pan_centeno.jpg';
import panAvena from '../assets/pan_avena.jpg';
import panMasaMadre from '../assets/pan_masa_madre.webp';
import panQuinoa from '../assets/pan_quinoa.jpg';
import panMaiz from '../assets/pan_maiz.avif';

function Menu() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () =>{
      const data = await getProductos();
      setProductos(data)
    }
  
    fetchProductos();
  }, []);
  
  const imagenesPorNombre = {
    "Pan Integral": panIntegral,
    "Pan de arroz": panArroz,
    "Pan de centeno": panCenteno,
    "Pan de avena": panAvena,
    "Pan de masa madre": panMasaMadre,
    "Pan de quinoa": panQuinoa,
    "Pan de maíz": panMaiz
  };



  return (
    <>
    
      {/* Sección de información */}
      <section className="info">
        <div className="info-texto">
          <h1>Alimentación sana</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam, repellendus dolor facere maiores iusto...
          </p>
        </div>
      </section>

      {/* Título menú */}
      <section className="titulo-menu">
        <h2>Panes saludables</h2>
      </section>

      {/* Productos */}
      <section className="cuadros-menu" id="cuadros-menu">
        {productos.map((prod, i) => (
          <ProductoCard 
            key={i} 
            nombre={prod.nombre}
            imagen={imagenesPorNombre[prod.nombre] || panIntegral}
            descripcion={prod.descripcion}
            precio={prod.precio}
            id={prod._id}
          />
        ))}
      </section>

      {/* Footer */}
      <section className="menu-oscuro"></section>
    </>
  );
}

export default Menu;