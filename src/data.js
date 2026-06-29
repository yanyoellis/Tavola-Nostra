export const categories = [
  { id: 'antipasti', label: 'Antipasti', eyebrow: 'To begin', image: '/images/menu.png' },
  { id: 'main', label: 'Main Courses', eyebrow: 'Pasta & risotto', image: '/images/main-courses.png' },
  { id: 'second', label: 'Second Courses', eyebrow: 'From the fire', image: '/images/second-courses.png' },
  { id: 'desserts', label: 'Desserts', eyebrow: 'A sweet ending', image: '/images/dessert.png' },
  { id: 'wine', label: 'Wine List', eyebrow: 'From our cellar', image: '/images/wine.png' },
  { id: 'drinks', label: 'Drinks', eyebrow: 'Aperitivi', image: '/images/wine.png' },
];

export const dishes = [
  { id: 'burrata', category: 'antipasti', name: 'Burrata della Casa', description: 'Puglian burrata, heirloom tomatoes, basil oil and toasted pine nuts.', price: 16, image: '/images/menu.png', tag: 'Vegetarian' },
  { id: 'carpaccio', category: 'antipasti', name: 'Carpaccio di Manzo', description: 'Chianina beef, capers, aged Parmigiano and lemon.', price: 19, image: '/images/second-courses.png' },
  { id: 'polpo', category: 'antipasti', name: 'Polpo alla Brace', description: 'Charred octopus, cannellini beans, parsley and smoked tomato.', price: 21, image: '/images/second-courses.png' },
  { id: 'tagliatelle', category: 'main', name: 'Tagliatelle al Tartufo', description: 'Hand-cut pasta, Umbrian black truffle, Parmigiano and thyme.', price: 29, image: '/images/main-courses.png', tag: 'Chef’s choice' },
  { id: 'pappardelle', category: 'main', name: 'Pappardelle al Cinghiale', description: 'Wide ribbons, slow-braised wild boar and Tuscan herbs.', price: 27, image: '/images/main-courses.png' },
  { id: 'risotto', category: 'main', name: 'Risotto al Limone', description: 'Carnaroli rice, Amalfi lemon, pecorino and garden peas.', price: 24, image: '/images/main-courses.png', tag: 'Vegetarian' },
  { id: 'ribeye', category: 'second', name: 'Costata alla Fiorentina', description: 'Charcoal-grilled ribeye, rosemary jus and roasted vegetables.', price: 42, image: '/images/second-courses.png', tag: 'Signature' },
  { id: 'branzino', category: 'second', name: 'Branzino Arrosto', description: 'Roasted sea bass, fennel, lemon and white wine butter.', price: 34, image: '/images/second-courses.png' },
  { id: 'pollo', category: 'second', name: 'Pollo al Mattone', description: 'Pressed Tuscan chicken, garlic, sage and crispy potatoes.', price: 28, image: '/images/second-courses.png' },
  { id: 'tiramisu', category: 'desserts', name: 'Tiramisù Tavola', description: 'Mascarpone, single-origin cocoa and espresso-soaked savoiardi.', price: 12, image: '/images/dessert.png', tag: 'House classic' },
  { id: 'panna-cotta', category: 'desserts', name: 'Panna Cotta al Miele', description: 'Vanilla bean cream, Tuscan honey and roasted apricots.', price: 11, image: '/images/dessert.png' },
  { id: 'affogato', category: 'desserts', name: 'Affogato', description: 'Fior di latte gelato and a double shot of espresso.', price: 9, image: '/images/dessert.png' },
  { id: 'brunello', category: 'wine', name: 'Brunello di Montalcino', description: 'Sangiovese Grosso · structured, graceful, long finish.', price: 18, image: '/images/wine.png', tag: 'By the glass' },
  { id: 'chianti', category: 'wine', name: 'Chianti Classico Riserva', description: 'Cherry, dried herbs and fine-grained Tuscan tannins.', price: 14, image: '/images/wine.png' },
  { id: 'vermentino', category: 'wine', name: 'Vermentino Toscana', description: 'Citrus blossom, sea salt and fresh almond.', price: 13, image: '/images/wine.png' },
  { id: 'spritz', category: 'drinks', name: 'Rosmarino Spritz', description: 'Bitter orange, prosecco, rosemary and soda.', price: 12, image: '/images/wine.png' },
  { id: 'espresso', category: 'drinks', name: 'Caffè Doppio', description: 'Our dark Tuscan roast, served short and fragrant.', price: 4, image: '/images/dessert.png' },
  { id: 'acqua', category: 'drinks', name: 'Acqua & Limone', description: 'Chilled Tuscan spring water with Amalfi lemon.', price: 6, image: '/images/wine.png' },
];

export const featured = dishes.filter((dish) => ['tagliatelle', 'ribeye', 'tiramisu'].includes(dish.id));

export const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(value);
