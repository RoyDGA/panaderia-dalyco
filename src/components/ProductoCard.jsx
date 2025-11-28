// src/components/ProductoCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext.jsx';

function ProductoCard({ id, imagen, nombre, descripcion, precio }) {
  const { addToCart } = useCart();

  return (
    <div className="cuadro">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p style={{ fontWeight: 600 }}>Precio: ${precio}</p>
      <button onClick={() => addToCart({ id, name: nombre, precio, image: imagen })}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductoCard;