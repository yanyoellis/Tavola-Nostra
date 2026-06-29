import React, { useEffect, useState } from 'react';
import { categories, dishes } from '../data';
import { DishCard } from './DishCard';
import { DishHotspot } from './DishHotspot';
import { Link } from './Link';

const spots = [
  { category: 'second', label: 'Second Courses', detail: 'From the fire', className: 'hotspot--second' },
  { category: 'main', label: 'Main Courses', detail: 'Handmade daily', className: 'hotspot--main' },
  { category: 'desserts', label: 'Desserts', detail: 'One last pleasure', className: 'hotspot--dessert' },
  { category: 'wine', label: 'Wine List', detail: 'Tuscan cellar', className: 'hotspot--wine' },
];

export function TableScene() {
  const [active, setActive] = useState(null);
  const current = categories.find((category) => category.id === active);
  const currentDishes = dishes.filter((dish) => dish.category === active);
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return <section className={`table-scene ${active ? `table-scene--active table-scene--${active}` : ''}`}>
    <div className="table-scene__photo"/>
    <div className="table-scene__vignette"/>
    <div className="hero-copy">
      <span className="kicker kicker--cream">A seat at our table</span>
      <h1>Every plate<br/>tells a <em>story.</em></h1>
      <p>Explore the menu by choosing something from the table.</p>
      <div className="hero-copy__hint"><span>↓</span> Hover over the table</div>
    </div>
    <div className="desktop-hotspots">
      {spots.map((spot) => <DishHotspot key={spot.category} {...spot} onClick={() => setActive(spot.category)}/>) }
      <Link to="/menu" className="hotspot hotspot--menu" ariaLabel="Open full menu"><span className="hotspot__pulse"/><span className="hotspot__label"><small>Leather-bound</small>Full Menu<b>↗</b></span></Link>
      <Link to="/cart" className="hotspot hotspot--receipt" ariaLabel="Open your order"><span className="hotspot__pulse"/><span className="hotspot__label"><small>Your order</small>The Bill<b>↗</b></span></Link>
    </div>
    <div className="mobile-scene">
      <div className="mobile-scene__intro"><span className="kicker kicker--cream">A seat at our table</span><h1>Choose your <em>course.</em></h1></div>
      <div className="mobile-scene__list">{categories.slice(1, 5).map((category) => <button key={category.id} onClick={() => setActive(category.id)} style={{ backgroundImage: `linear-gradient(90deg,rgba(24,12,8,.12),rgba(24,12,8,.72)),url(${category.image})` }}><small>{category.eyebrow}</small><strong>{category.label}</strong><span>→</span></button>)}</div>
      <Link to="/menu" className="button button--cream">Open full menu <span>↗</span></Link>
    </div>
    <aside className={active ? 'scene-drawer scene-drawer--open' : 'scene-drawer'} aria-hidden={!active}>
      <button className="scene-drawer__close" onClick={() => setActive(null)} aria-label="Close category">×</button>
      {current && <>
        <span className="kicker">{current.eyebrow}</span><h2>{current.label}</h2>
        <p className="scene-drawer__intro">A small taste of the menu, prepared with what is best today.</p>
        <div className="scene-drawer__items">{currentDishes.slice(0, 2).map((dish) => <DishCard key={dish.id} dish={dish} compact/>)}</div>
        <Link to={`/menu#${active}`} className="text-link">See every {current.label.toLowerCase()} <span>→</span></Link>
      </>}
    </aside>
  </section>;
}
