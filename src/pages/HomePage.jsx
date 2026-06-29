import React from 'react';
import { TableScene } from '../components/TableScene';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DishCard } from '../components/DishCard';
import { featured } from '../data';
import { Link } from '../components/Link';

export function HomePage() {
  return <main>
    <Header tone="light"/>
    <TableScene/>
    <section className="featured shell section">
      <div className="section-heading">
        <div><span className="kicker">From our kitchen</span><h2>Today’s <em>favourites</em></h2></div>
        <div><p>Honest ingredients, patient hands, and the generosity of an Italian table.</p><Link to="/menu" className="text-link">Explore the full menu <span>→</span></Link></div>
      </div>
      <div className="dish-grid">{featured.map((dish) => <DishCard key={dish.id} dish={dish}/>)}</div>
    </section>
    <section className="story-teaser">
      <div className="story-teaser__photo"/>
      <div className="story-teaser__card">
        <span className="kicker">La nostra casa</span>
        <h2>Slow food.<br/><em>Warm hearts.</em></h2>
        <p>In our dining room, recipes travel from grandmother to grandchild. Pasta is rolled before lunch, sauces keep their own time, and the door is always open.</p>
        <Link to="/about" className="button button--ink">Discover our story <span>→</span></Link>
      </div>
    </section>
    <section className="reservation shell section" id="reserve">
      <div className="reservation__note"><span>18</span><small>Via della Rosa<br/>Pienza · Toscana</small></div>
      <div className="reservation__copy"><span className="kicker">Your table is waiting</span><h2>Stay for a little while.</h2><p>Lunch under the olive branches, dinner by candlelight. Tell us when you’re coming.</p></div>
      <form className="reservation__form" onSubmit={(event) => { event.preventDefault(); alert('Grazie! Your table request has been received.'); }}>
        <label><span>Date</span><input type="date" required/></label>
        <label><span>Time</span><select defaultValue="19:30"><option>18:00</option><option>19:30</option><option>21:00</option></select></label>
        <label><span>Guests</span><select defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="6">5+ guests</option></select></label>
        <button className="button button--wine">Reserve a table <span>→</span></button>
      </form>
    </section>
    <Footer/>
  </main>;
}
