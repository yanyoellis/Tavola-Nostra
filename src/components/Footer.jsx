import React from 'react';
import { Link } from './Link';

export function Footer() {
  return <footer className="footer">
    <div className="footer__shade"/>
    <div className="footer__content shell">
      <div className="footer__lead">
        <span className="kicker kicker--cream">Come as a guest</span>
        <h2>Leave as <em>famiglia.</em></h2>
        <p>Via della Rosa 18, Pienza, Toscana</p>
      </div>
      <div><h3>Visit</h3><p>Mon–Thu · 12:00–22:00<br/>Fri–Sun · 12:00–23:30</p></div>
      <div><h3>Contact</h3><p>+39 0578 000 184<br/>ciao@tavolanostra.it</p></div>
      <div><h3>Follow</h3><p><a href="#instagram">Instagram</a><br/><a href="#facebook">Facebook</a></p></div>
      <div className="footer__bottom"><span>© 2026 Tavola Nostra</span><Link to="/menu">View the menu →</Link></div>
    </div>
  </footer>;
}
