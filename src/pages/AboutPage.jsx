import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from '../components/Link';

export function AboutPage() {
  return <main className="page page--about">
    <Header tone="light"/>
    <section className="about-hero"><div className="about-hero__shade"/><div className="about-hero__copy"><span className="kicker kicker--cream">Since 1987 · Pienza</span><h1>A table made<br/>for <em>sharing.</em></h1><p>We cook the way our family always has: close to the land, generous with time, and happiest when every chair is taken.</p></div></section>
    <section className="about-intro shell section">
      <div><span className="kicker">About us</span><h2>Rooted in Tuscany.<br/><em>Open to the world.</em></h2></div>
      <div><p className="lead">Tavola Nostra began with twelve chairs, a wood-fired oven and Nonna Lucia’s notebook of recipes.</p><p>What grew around that little room was less a restaurant than a ritual: farmers arriving with the morning’s harvest, pasta cut by hand before service, and neighbours lingering over the last of the wine. We still work that way. Seasons write the menu; our guests complete it.</p></div>
    </section>
    <section className="values shell">
      <article><span>01</span><h3>Our Philosophy</h3><p>Buy close, waste little, and never hurry a sauce. We choose small farms, whole ingredients and the honest rhythm of each season.</p></article>
      <article><span>02</span><h3>The Place</h3><p>Old stone, worn wood, linen and sunlight. Nothing is too precious to be touched; everything is here to make you feel at home.</p></article>
      <article><span>03</span><h3>Our Kitchen</h3><p>Tuscan at heart, curious by nature. Tradition gives us roots; today’s harvest tells us where to go next.</p></article>
    </section>
    <section className="chef shell section">
      <div className="chef__image"><img src="/images/chef.png" alt="Chef Lorenzo Bianchi in the restaurant kitchen"/><span>Chef Lorenzo Bianchi</span></div>
      <div className="chef__copy"><span className="kicker">The chef</span><h2>“Good cooking begins long before the pan.”</h2><p>Lorenzo learned beside his mother in Siena and spent twenty years in kitchens from Bologna to Marseille before coming home. His food is precise without losing its soul: handmade pasta, quiet technique, and a fierce loyalty to the people who grow what we serve.</p><div className="signature">Lorenzo</div></div>
    </section>
    <section className="about-cta"><div><span className="kicker kicker--cream">Pull up a chair</span><h2>Let us cook for you.</h2><div><Link to="/menu" className="button button--cream">View the menu <span>→</span></Link><a href="/#reserve" className="button button--ghost">Reserve a table <span>→</span></a></div></div></section>
    <Footer/>
  </main>;
}
