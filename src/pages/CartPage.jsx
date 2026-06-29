import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CartItem } from '../components/CartItem';
import { useCart } from '../cart-context';
import { money } from '../data';
import { Link } from '../components/Link';

export function CartPage() {
  const { cart, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const fee = cart.length ? 4.5 : 0;
  const submit = (event) => { event.preventDefault(); setPlaced(true); clear(); };
  return <main className="page page--cart">
    <Header tone="light"/>
    <section className="cart-scene">
      <div className="cart-scene__shade"/>
      <div className="receipt">
        <div className="receipt__head"><span>TN</span><div><h1>Tavola Nostra</h1><p>Via della Rosa 18 · Pienza</p></div><small>ORDER<br/>#{String(Date.now()).slice(-4)}</small></div>
        {placed ? <div className="order-success"><span>✓</span><h2>Grazie.</h2><p>Your order is in the kitchen. We’ll call shortly to confirm every detail.</p><Link to="/menu" className="button button--ink">Back to menu <span>→</span></Link></div>
        : cart.length === 0 ? <div className="empty-cart"><div className="empty-cart__plate">✦</div><h2>Your table is still empty</h2><p>Choose something delicious and we’ll set a place for you.</p><Link to="/menu" className="button button--ink">Back to menu <span>→</span></Link></div>
        : <form onSubmit={submit}>
          <div className="receipt__rule"><span>Your order</span><span>{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span></div>
          <div className="cart-items">{cart.map((item) => <CartItem key={item.id} item={item}/>)}</div>
          <div className="totals"><p><span>Subtotal</span><strong>{money(subtotal)}</strong></p><p><span>Service & delivery</span><strong>{money(fee)}</strong></p><p className="totals__grand"><span>Total</span><strong>{money(subtotal + fee)}</strong></p></div>
          <div className="order-fields"><label><span>Your name</span><input required placeholder="Luca Bianchi"/></label><label><span>Phone</span><input required type="tel" placeholder="+39 000 000 0000"/></label><label className="order-fields__wide"><span>Address or a note for us</span><textarea required rows="3" placeholder="Street, house number, and anything we should know"/></label></div>
          <button className="button button--wine button--full">Place order <span>{money(subtotal + fee)} →</span></button>
          <p className="receipt__fine">By placing your order you agree to be contacted for confirmation.</p>
        </form>}
      </div>
    </section>
    <Footer/>
  </main>;
}
