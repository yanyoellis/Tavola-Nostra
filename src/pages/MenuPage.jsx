import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MenuCategory } from '../components/MenuCategory';
import { categories, dishes } from '../data';

export function MenuPage() {
  useEffect(() => {
    if (window.location.hash) window.setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' }), 80);
  }, []);
  return <main className="page page--menu">
    <Header tone="dark"/>
    <section className="menu-hero">
      <div><span className="kicker kicker--cream">Cucina Toscana</span><h1>The <em>Menu</em></h1><p>Our menu follows the hills, gardens and seasons around us. Some things change. The feeling never does.</p></div>
    </section>
    <nav className="category-nav shell">{categories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.label}</a>)}</nav>
    <div className="menu-page shell">{categories.map((category) => <MenuCategory key={category.id} category={category} dishes={dishes.filter((dish) => dish.category === category.id)}/>)}</div>
    <Footer/>
  </main>;
}
