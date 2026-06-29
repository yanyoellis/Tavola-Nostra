import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tavola-cart')) || []; }
    catch { return []; }
  });

  useEffect(() => { localStorage.setItem('tavola-cart', JSON.stringify(cart)); }, [cart]);

  const api = useMemo(() => ({
    cart,
    count: cart.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    add: (dish) => setCart((items) => {
      const found = items.find((item) => item.id === dish.id);
      return found
        ? items.map((item) => item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...dish, quantity: 1 }];
    }),
    change: (id, delta) => setCart((items) => items
      .map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
      .filter((item) => item.quantity > 0)),
    remove: (id) => setCart((items) => items.filter((item) => item.id !== id)),
    clear: () => setCart([]),
  }), [cart]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
