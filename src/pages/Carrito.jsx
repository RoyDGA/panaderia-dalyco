// src/pages/Carrito.jsx
import React from 'react';
import { useCart } from '../context/CartContext.jsx';

function Carrito() {
  const { items, total, updateQty, removeFromCart, clearCart } = useCart();

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Tu carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <div>Precio: ${item.price}</div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                  style={{ width: 60 }}
                />
                <button onClick={() => removeFromCart(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </main>
  );
}

export default Carrito;