import React from 'react';
import { money } from '../data';
import { useCart } from '../cart-context';

export function CartItem({ item }) {
  const { change, remove } = useCart();
  return <div className="cart-item">
    <div className="cart-item__name"><h3>{item.name}</h3><small>{money(item.price)} each</small></div>
    <div className="quantity"><button onClick={() => change(item.id, -1)} aria-label={`Remove one ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => change(item.id, 1)} aria-label={`Add one ${item.name}`}>+</button></div>
    <strong>{money(item.price * item.quantity)}</strong>
    <button className="remove" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}>×</button>
  </div>;
}
