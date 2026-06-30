import React, { useEffect, useState } from 'react';
import { CartProvider } from './cart-context';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { CartPage } from './pages/CartPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

function Router() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  if (path === '/menu') return <MenuPage/>;
  if (path === '/about') return <AboutPage/>;
  if (path === '/cart') return <CartPage/>;
  if (path === '/case-study' || path === '/ux-case-study') return <CaseStudyPage/>;
  return <HomePage/>;
}

export function App() {
  return <CartProvider><Router/></CartProvider>;
}
