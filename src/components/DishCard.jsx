import React, { useState } from 'react';
import { money } from '../data';
import { useCart } from '../cart-context';

export function DishCard({ dish, compact = false }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    add(dish); setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };
  return <article className={`dish-card ${compact ? 'dish-card--compact' : ''}`}>
    <div className="dish-card__image"><img src={dish.image} alt={dish.name}/>{dish.tag && <span>{dish.tag}</span>}</div>
    <div className="dish-card__body">
      <div className="dish-card__heading"><h3>{dish.name}</h3><strong>{money(dish.price)}</strong></div>
      <p>{dish.description}</p>
      <button className={added ? 'add-button add-button--done' : 'add-button'} onClick={handleAdd}>
        <span>{added ? 'Added to table' : 'Add to cart'}</span><b>{added ? '✓' : '+'}</b>
      </button>
    </div>
  </article>;
}
