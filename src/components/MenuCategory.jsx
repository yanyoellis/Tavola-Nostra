import React from 'react';
import { DishCard } from './DishCard';

export function MenuCategory({ category, dishes }) {
  return <section className="menu-category" id={category.id}>
    <div className="menu-category__head">
      <div><span className="kicker">{category.eyebrow}</span><h2>{category.label}</h2></div>
      <p>{String(dishes.length).padStart(2, '0')} selections</p>
    </div>
    <div className="dish-grid">{dishes.map((dish) => <DishCard key={dish.id} dish={dish}/>)}</div>
  </section>;
}
