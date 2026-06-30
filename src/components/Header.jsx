import React, { useState } from 'react';
import { useCart } from '../cart-context';
import { Link } from './Link';

export function Header({ tone = 'light' }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return <header className={`header header--${tone}`}>
    <Link to="/" className="brand" onClick={() => setOpen(false)}>
      <span className="brand__mark">TN</span>
      <span><b>Tavola Nostra</b><small>Cucina Toscana</small></span>
    </Link>
    <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
    <nav className={open ? 'nav nav--open' : 'nav'}>
      <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
      <Link to="/about" onClick={() => setOpen(false)}>Our story</Link>
      <Link to="/case-study" onClick={() => setOpen(false)}>UX Case</Link>
      <a href="/#reserve" onClick={() => setOpen(false)}>Reservations</a>
    </nav>
    <Link to="/cart" className="cart-link" ariaLabel={`Cart with ${count} items`}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20.4 8H7M10 20h.01M17 20h.01"/></svg>
      <span>Cart</span><b>{count}</b>
    </Link>
  </header>;
}
