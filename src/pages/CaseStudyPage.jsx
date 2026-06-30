import React, { useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from '../components/Link';

const languages = [
  { id: 'en', label: 'English' },
  { id: 'ru', label: 'Русский' },
  { id: 'pl', label: 'Polski' },
  { id: 'uk', label: 'Українська' },
];

const copy = {
  en: {
    pageLabel: 'UX Case Study',
    title: 'Italian Table Restaurant',
    subtitle: 'Designing a Dining Table as an Interactive Menu',
    intro: 'A portfolio case study for an immersive Italian restaurant website where the homepage becomes a table scene and every dish becomes a piece of navigation.',
    live: 'View live project',
    github: 'View GitHub',
    language: 'Case study language',
    meta: [
      ['Role', 'UX/UI Designer'],
      ['Project Type', 'Restaurant Website Concept'],
      ['Focus', 'Interactive Navigation · Food Experience · Atmospheric UI · E-commerce Cart Flow'],
      ['Format', 'React Multi-page Website'],
    ],
    overviewTitle: 'Project overview',
    overview: [
      'This concept reimagines a restaurant website as an immersive dining table experience.',
      'Instead of starting with a standard hero section, navigation grid, or list of menu categories, the user arrives at a table inside an Italian restaurant. Every object on the table has a purpose: pasta opens Main Courses, steak opens Second Courses, tiramisu opens Desserts, wine opens the Wine List, the paper menu opens the full menu, and the receipt leads to the cart.',
      'The goal was to make menu discovery feel more emotional and memorable while still supporting practical actions such as browsing dishes, adding items to cart, and placing an order.',
    ],
    problemTitle: 'UX problem',
    problem: [
      'Most restaurant websites are functional but forgettable. They usually follow the same pattern: hero image, menu button, food cards, contact section. This structure works, but it rarely communicates the atmosphere of the restaurant.',
      'The challenge was to create a restaurant website where the user immediately feels the place, the food, and the dining mood before reading anything.',
    ],
    problemStatement: 'How can a restaurant menu become an experience without making the ordering process confusing?',
    goalsTitle: 'UX goals',
    goals: [
      'Turn the restaurant table into the main interface.',
      'Use food and objects as navigation elements.',
      'Make the concept feel atmospheric but still usable.',
      'Keep ordering and cart functionality clear.',
      'Support browsing by category and full menu view.',
      'Preserve readability across desktop, tablet, and mobile.',
    ],
    journeyTitle: 'User journey',
    journeyNote: 'The journey mirrors the feeling of sitting at a restaurant table and choosing from what is placed in front of the user.',
    journey: ['Enter Homepage', 'Explore Table Scene', 'Hover Over Dish or Object', 'See Category Label', 'Click Interactive Item', 'Open Menu Category', 'Choose Dish', 'Add to Cart', 'Review Receipt-style Cart', 'Place Order'],
    navTitle: 'Navigation concept',
    navIntro: 'The main navigation is built around physical objects. Instead of asking users to choose from a standard category list, the interface lets them interact with items on the table.',
    navItems: [
      ['Pasta', 'Main Courses'],
      ['Steak', 'Second Courses'],
      ['Tiramisu', 'Desserts'],
      ['Wine Glass', 'Wine List'],
      ['Paper Menu', 'Full Menu'],
      ['Receipt', 'Cart / Order'],
    ],
    interactionTitle: 'Interaction logic',
    interaction: [
      'Hover states help users understand what is clickable. When the user hovers over a dish or object, it receives a soft highlight, slight scale, steam, shine, or glow. A short label appears to confirm the category.',
      'Clicking an item visually zooms toward the selected object before opening the related menu section. This creates a stronger connection between the physical table and the digital menu category.',
    ],
    hierarchyTitle: 'Information hierarchy',
    hierarchy: ['Table Scene', 'Interactive Objects', 'Category Label', 'Menu Category', 'Dish Card', 'Add to Cart', 'Receipt-style Cart'],
    hierarchyNote: 'Information appears progressively: first atmosphere, then category choice, then individual dishes.',
    menuTitle: 'Menu UX',
    menu: [
      'The menu is divided into clear restaurant categories: Antipasti, Main Courses, Second Courses, Desserts, Wine List, and Drinks.',
      'Each dish card includes photo, name, description, price, category, and an Add to cart button. The card structure keeps ordering practical while the table scene keeps the concept distinctive.',
    ],
    cartTitle: 'Cart UX',
    cart: [
      'The cart page is designed as a restaurant receipt placed on the same wooden table. This keeps checkout connected to the restaurant atmosphere instead of turning it into a generic e-commerce flow.',
      'The cart includes dish name, quantity, unit price, total price, plus and minus controls, remove button, subtotal, service fee, total, contact fields, and a Place Order button.',
      'The empty state says “Your table is still empty” and leads users back to the menu, keeping the restaurant metaphor consistent.',
    ],
    aboutTitle: 'About Page UX',
    about: [
      'The About page is designed as a quiet corner of the restaurant rather than a plain text page.',
      'Its purpose is to build trust through story, place, people, and atmosphere. The blocks About Us, Our Philosophy, The Chef, The Place, photos, and action buttons support emotional decision-making.',
    ],
    visualTitle: 'Visual UX reasoning',
    visual: [
      'Warm daylight, dark wood, cream ceramics, wine tones, olive green, tomato red, and soft shadows create a rich dining atmosphere.',
      'The interface avoids generic restaurant templates. It feels editorial, warm, tactile, and premium while preserving clear UI contrast.',
    ],
    visualDecisions: [
      'Wooden table creates physical context.',
      'Real dishes become navigation elements.',
      'Warm light makes the experience inviting.',
      'Serif typography adds elegance.',
      'Sans-serif interface text keeps usability clear.',
      'Receipt-style cart connects ordering to the restaurant metaphor.',
    ],
    microTitle: 'Microinteractions',
    microPurpose: 'Microinteractions make the table feel alive while also confirming what the user can click.',
    micro: [
      'Dish hover highlight',
      'Soft zoom on clickable objects',
      'Steam or shine on food hover',
      'Tooltip category label',
      'Camera zoom toward selected item',
      'Menu panel appears beside the dish',
      'Add to cart confirmation',
      'Quantity controls in cart',
      'Receipt-style cart updates automatically',
    ],
    responsiveTitle: 'Responsive UX',
    responsive: [
      ['Desktop', 'The full table scene is the main experience. The user explores the table visually.'],
      ['Tablet', 'The table remains visible, but interactive items become larger and easier to tap.'],
      ['Mobile', 'The scene becomes a vertical category list with an atmospheric restaurant background. This protects usability instead of forcing a complex table interface onto a small screen.'],
    ],
    techTitle: 'Technical UX logic',
    tech: [
      'The project uses React and localStorage to support a simple ordering flow.',
      'Cart data is saved in localStorage, users can add items from any page, quantity can be changed, totals update automatically, and the cart remains available after reload.',
    ],
    componentsLabel: 'Main components',
    components: ['App', 'HomePage', 'AboutPage', 'CartPage', 'MenuPage', 'TableScene', 'DishHotspot', 'MenuCategory', 'DishCard', 'CartItem', 'Header', 'Footer'],
    accessibilityTitle: 'Accessibility considerations',
    accessibility: [
      'Clear labels for all clickable objects',
      'Keyboard access to table hotspots',
      'Visible focus states',
      'Readable contrast on menu cards',
      'Alternative category list for mobile',
      'No essential information hidden only in images',
      'Large tap targets',
      'Clear cart controls',
      'Reduced motion option',
    ],
    decisionsTitle: 'Key design decisions',
    decisions: [
      ['01', 'Table as interface', 'The restaurant table becomes the homepage because it immediately communicates food, atmosphere, and interaction.'],
      ['02', 'Objects as navigation', 'Each item on the table replaces a standard menu link, making category browsing more memorable.'],
      ['03', 'Hover as discovery', 'Soft highlights and labels help users understand clickable areas without long instructions.'],
      ['04', 'Receipt-style cart', 'The cart is designed as a restaurant bill to keep checkout connected to the dining concept.'],
      ['05', 'Mobile simplification', 'On mobile, the interface becomes more linear to protect usability.'],
      ['06', 'Atmosphere before template', 'The design prioritizes restaurant mood instead of using a generic food delivery layout.'],
    ],
    resultTitle: 'Result',
    result: 'The final concept turns a restaurant website into an interactive dining scene. Users can explore the table, discover categories through dishes, browse the full menu, add items to cart, and place an order.',
    reflectionTitle: 'Reflection',
    reflection: [
      'This project explores how physical dining rituals can become digital interaction patterns.',
      'The strongest part of the concept is the relationship between object and action: food is not only decoration, it is navigation.',
      'If developed further, the project could include table reservation logic, delivery options, dietary filters, animated order confirmation, and a stronger CMS-based menu system.',
    ],
  },
  ru: {
    pageLabel: 'UX-кейс',
    title: 'Italian Table Restaurant',
    subtitle: 'Проектирование ресторанного стола как интерактивного меню',
    intro: 'Портфолио-кейс об иммерсивном сайте итальянского ресторана, где главная страница становится сценой за столом, а блюда превращаются в навигацию.',
    live: 'Открыть проект',
    github: 'Открыть GitHub',
    language: 'Язык кейса',
    meta: [
      ['Роль', 'UX/UI Designer'],
      ['Тип проекта', 'Концепт сайта ресторана'],
      ['Фокус', 'Интерактивная навигация · Food Experience · Атмосферный UI · Корзина заказа'],
      ['Формат', 'Многостраничный сайт на React'],
    ],
    overviewTitle: 'Обзор проекта',
    overview: [
      'Этот концепт переосмысливает сайт ресторана как иммерсивный опыт за обеденным столом.',
      'Вместо стандартного hero-блока, сетки навигации или списка категорий пользователь попадает за стол внутри итальянского ресторана. Каждый предмет имеет смысл: паста открывает Main Courses, стейк — Second Courses, тирамису — Desserts, вино — Wine List, бумажное меню — полное меню, а чек ведет в корзину.',
      'Цель — сделать поиск блюд более эмоциональным и запоминающимся, сохранив понятные действия: просмотр блюд, добавление в корзину и оформление заказа.',
    ],
    problemTitle: 'UX-проблема',
    problem: [
      'Большинство сайтов ресторанов функциональны, но быстро забываются. Обычно они используют один и тот же паттерн: фото в hero, кнопка меню, карточки блюд, контакты. Это работает, но редко передает атмосферу места.',
      'Задача была в том, чтобы пользователь почувствовал ресторан, еду и настроение обеда еще до чтения текста.',
    ],
    problemStatement: 'Как превратить ресторанное меню в опыт, не запутав процесс заказа?',
    goalsTitle: 'UX-цели',
    goals: [
      'Сделать ресторанный стол главным интерфейсом.',
      'Использовать блюда и предметы как элементы навигации.',
      'Сохранить атмосферность без потери удобства.',
      'Оставить заказ и корзину максимально понятными.',
      'Поддержать просмотр по категориям и через полное меню.',
      'Сохранить читаемость на desktop, tablet и mobile.',
    ],
    journeyTitle: 'Путь пользователя',
    journeyNote: 'Путь повторяет ощущение, будто пользователь сидит за столом и выбирает из того, что находится прямо перед ним.',
    journey: ['Открывает главную', 'Исследует сцену стола', 'Наводит на блюдо или предмет', 'Видит подпись категории', 'Кликает интерактивный объект', 'Открывает категорию меню', 'Выбирает блюдо', 'Добавляет в корзину', 'Проверяет чек-корзину', 'Оформляет заказ'],
    navTitle: 'Навигационная концепция',
    navIntro: 'Главная навигация построена вокруг физических объектов. Вместо стандартного списка категорий пользователь взаимодействует с предметами на столе.',
    navItems: [
      ['Паста', 'Main Courses'],
      ['Стейк', 'Second Courses'],
      ['Тирамису', 'Desserts'],
      ['Бокал вина', 'Wine List'],
      ['Бумажное меню', 'Full Menu'],
      ['Чек', 'Cart / Order'],
    ],
    interactionTitle: 'Логика взаимодействий',
    interaction: [
      'Hover-состояния помогают понять, что кликабельно. При наведении блюдо или предмет получает мягкую подсветку, легкое увеличение, пар, блеск или свечение. Короткая подпись подтверждает категорию.',
      'После клика камера визуально приближается к выбранному объекту, а затем открывается соответствующий раздел меню. Так физический стол и цифровая категория ощущаются связанными.',
    ],
    hierarchyTitle: 'Информационная иерархия',
    hierarchy: ['Сцена стола', 'Интерактивные объекты', 'Подпись категории', 'Категория меню', 'Карточка блюда', 'Add to Cart', 'Корзина в виде чека'],
    hierarchyNote: 'Информация раскрывается постепенно: сначала атмосфера, затем выбор категории, затем конкретные блюда.',
    menuTitle: 'UX меню',
    menu: [
      'Меню разделено на понятные ресторанные категории: Antipasti, Main Courses, Second Courses, Desserts, Wine List и Drinks.',
      'Каждая карточка содержит фото, название, описание, цену, категорию и кнопку Add to cart. Карточки делают заказ практичным, а сцена стола сохраняет уникальность концепта.',
    ],
    cartTitle: 'UX корзины',
    cart: [
      'Корзина оформлена как ресторанный чек на том же деревянном столе. Это связывает checkout с атмосферой ресторана и не превращает его в обычную e-commerce страницу.',
      'В корзине есть название блюда, количество, цена за единицу, итог, плюс/минус, удаление, subtotal, service fee, total, поля контактов и кнопка Place Order.',
      'Пустое состояние “Your table is still empty” возвращает пользователя в меню и поддерживает ресторанную метафору.',
    ],
    aboutTitle: 'UX страницы About',
    about: [
      'Страница About выглядит как тихий уголок ресторана, а не как обычная текстовая страница.',
      'Ее задача — создать доверие через историю, место, людей и атмосферу. Блоки About Us, Our Philosophy, The Chef, The Place, фотографии и CTA помогают эмоциональному выбору.',
    ],
    visualTitle: 'Визуальная UX-логика',
    visual: [
      'Теплый дневной свет, темное дерево, кремовая керамика, винные оттенки, оливковый, томатный и мягкие тени создают богатую ресторанную атмосферу.',
      'Интерфейс избегает шаблонного вида. Он ощущается редакционно, тепло, тактильно и премиально, но сохраняет читаемый контраст.',
    ],
    visualDecisions: [
      'Деревянный стол задает физический контекст.',
      'Реальные блюда становятся навигацией.',
      'Теплый свет делает опыт гостеприимным.',
      'Serif-шрифт добавляет элегантность.',
      'Sans-serif текст сохраняет ясность интерфейса.',
      'Корзина-чек связывает заказ с ресторанной метафорой.',
    ],
    microTitle: 'Микровзаимодействия',
    microPurpose: 'Микровзаимодействия оживляют стол и одновременно подтверждают, что можно нажать.',
    micro: [
      'Подсветка блюда при наведении',
      'Мягкий zoom кликабельных объектов',
      'Пар или блеск при hover',
      'Tooltip с названием категории',
      'Приближение камеры к выбранному предмету',
      'Панель меню рядом с блюдом',
      'Подтверждение Add to cart',
      'Контролы количества в корзине',
      'Автоматическое обновление чека',
    ],
    responsiveTitle: 'Responsive UX',
    responsive: [
      ['Desktop', 'Полная сцена стола является главным опытом: пользователь исследует интерфейс визуально.'],
      ['Tablet', 'Стол остается видимым, а интерактивные элементы становятся крупнее и удобнее для касания.'],
      ['Mobile', 'Сцена превращается в вертикальный список категорий на атмосферном фоне. Это защищает usability и не заставляет сложную сцену ломаться на маленьком экране.'],
    ],
    techTitle: 'Техническая UX-логика',
    tech: [
      'Проект использует React и localStorage для простой логики заказа.',
      'Корзина сохраняется в localStorage, товары можно добавлять с любой страницы, количество меняется, суммы пересчитываются автоматически, а корзина остается после перезагрузки.',
    ],
    componentsLabel: 'Основные компоненты',
    components: ['App', 'HomePage', 'AboutPage', 'CartPage', 'MenuPage', 'TableScene', 'DishHotspot', 'MenuCategory', 'DishCard', 'CartItem', 'Header', 'Footer'],
    accessibilityTitle: 'Accessibility considerations',
    accessibility: [
      'Понятные labels для кликабельных объектов',
      'Доступ к hotspots с клавиатуры',
      'Видимые focus-состояния',
      'Читаемый контраст на карточках',
      'Альтернативный список категорий на mobile',
      'Важная информация не спрятана только в изображениях',
      'Крупные tap targets',
      'Понятные контролы корзины',
      'Поддержка reduced motion',
    ],
    decisionsTitle: 'Ключевые дизайн-решения',
    decisions: [
      ['01', 'Стол как интерфейс', 'Стол становится главной страницей, потому что сразу передает еду, атмосферу и интерактивность.'],
      ['02', 'Предметы как навигация', 'Каждый объект заменяет обычную ссылку меню и делает категории более запоминающимися.'],
      ['03', 'Hover как discovery', 'Мягкие подсветки и подписи помогают понять кликабельность без длинных инструкций.'],
      ['04', 'Корзина в виде чека', 'Checkout выглядит как ресторанный счет и остается частью dining concept.'],
      ['05', 'Упрощение на mobile', 'На mobile интерфейс становится линейным, чтобы сохранить удобство.'],
      ['06', 'Атмосфера вместо шаблона', 'Дизайн ставит настроение ресторана выше generic food delivery layout.'],
    ],
    resultTitle: 'Результат',
    result: 'Финальный концепт превращает сайт ресторана в интерактивную сцену ужина. Пользователь исследует стол, открывает категории через блюда, смотрит полное меню, добавляет позиции в корзину и оформляет заказ.',
    reflectionTitle: 'Рефлексия',
    reflection: [
      'Проект исследует, как физические ресторанные ритуалы могут стать цифровыми паттернами взаимодействия.',
      'Самая сильная часть концепта — связь объекта и действия: еда здесь не декор, а навигация.',
      'В дальнейшем проект можно расширить логикой бронирования, доставкой, dietary filters, анимацией подтверждения заказа и CMS для меню.',
    ],
  },
  pl: {
    pageLabel: 'UX Case Study',
    title: 'Italian Table Restaurant',
    subtitle: 'Projektowanie restauracyjnego stołu jako interaktywnego menu',
    intro: 'Portfolio case study immersyjnej strony włoskiej restauracji, w której strona główna staje się sceną przy stole, a dania stają się nawigacją.',
    live: 'Zobacz projekt',
    github: 'Zobacz GitHub',
    language: 'Język case study',
    meta: [
      ['Rola', 'UX/UI Designer'],
      ['Typ projektu', 'Koncepcja strony restauracji'],
      ['Fokus', 'Interaktywna nawigacja · Food Experience · Atmosferyczny UI · Koszyk zamówienia'],
      ['Format', 'Wielostronicowa strona React'],
    ],
    overviewTitle: 'Opis projektu',
    overview: [
      'Ta koncepcja zmienia stronę restauracji w immersyjne doświadczenie przy stole.',
      'Zamiast standardowego hero, siatki nawigacji lub listy kategorii użytkownik trafia do wnętrza włoskiej restauracji. Każdy obiekt na stole ma funkcję: makaron otwiera Main Courses, stek — Second Courses, tiramisu — Desserts, wino — Wine List, papierowe menu — pełne menu, a rachunek prowadzi do koszyka.',
      'Celem było, aby odkrywanie menu było bardziej emocjonalne i zapamiętywalne, ale nadal wspierało praktyczne akcje: przeglądanie dań, dodawanie do koszyka i składanie zamówienia.',
    ],
    problemTitle: 'Problem UX',
    problem: [
      'Większość stron restauracji jest funkcjonalna, ale mało pamiętna. Zwykle powtarzają ten sam schemat: zdjęcie hero, przycisk menu, karty dań i kontakt. To działa, ale rzadko oddaje atmosferę miejsca.',
      'Wyzwanie polegało na stworzeniu strony, na której użytkownik czuje miejsce, jedzenie i nastrój posiłku jeszcze zanim zacznie czytać.',
    ],
    problemStatement: 'Jak sprawić, aby menu restauracji stało się doświadczeniem, nie komplikując procesu zamawiania?',
    goalsTitle: 'Cele UX',
    goals: [
      'Zamienić restauracyjny stół w główny interfejs.',
      'Użyć jedzenia i przedmiotów jako elementów nawigacji.',
      'Zachować atmosferę bez utraty użyteczności.',
      'Utrzymać jasny proces zamówienia i koszyka.',
      'Wspierać przeglądanie kategorii i pełnego menu.',
      'Zachować czytelność na desktopie, tablecie i mobile.',
    ],
    journeyTitle: 'Ścieżka użytkownika',
    journeyNote: 'Ścieżka przypomina siedzenie przy restauracyjnym stole i wybieranie z tego, co znajduje się przed użytkownikiem.',
    journey: ['Wejście na stronę główną', 'Eksploracja sceny stołu', 'Hover na daniu lub obiekcie', 'Zobaczenie etykiety kategorii', 'Kliknięcie interaktywnego elementu', 'Otwarcie kategorii menu', 'Wybór dania', 'Dodanie do koszyka', 'Sprawdzenie koszyka-rachunku', 'Złożenie zamówienia'],
    navTitle: 'Koncepcja nawigacji',
    navIntro: 'Główna nawigacja opiera się na fizycznych obiektach. Zamiast standardowej listy kategorii użytkownik wchodzi w interakcję z elementami na stole.',
    navItems: [
      ['Makaron', 'Main Courses'],
      ['Stek', 'Second Courses'],
      ['Tiramisu', 'Desserts'],
      ['Kieliszek wina', 'Wine List'],
      ['Papierowe menu', 'Full Menu'],
      ['Rachunek', 'Cart / Order'],
    ],
    interactionTitle: 'Logika interakcji',
    interaction: [
      'Stany hover pomagają zrozumieć, co można kliknąć. Po najechaniu danie lub obiekt otrzymuje miękkie podświetlenie, delikatne powiększenie, parę, połysk albo glow. Krótka etykieta potwierdza kategorię.',
      'Po kliknięciu kamera wizualnie przybliża się do wybranego obiektu, a następnie otwiera powiązaną sekcję menu. Dzięki temu fizyczny stół i cyfrowa kategoria są odczuwane jako jedna całość.',
    ],
    hierarchyTitle: 'Hierarchia informacji',
    hierarchy: ['Scena stołu', 'Interaktywne obiekty', 'Etykieta kategorii', 'Kategoria menu', 'Karta dania', 'Add to Cart', 'Koszyk jako rachunek'],
    hierarchyNote: 'Informacje pojawiają się progresywnie: najpierw atmosfera, potem wybór kategorii, następnie konkretne dania.',
    menuTitle: 'UX menu',
    menu: [
      'Menu jest podzielone na czytelne kategorie restauracyjne: Antipasti, Main Courses, Second Courses, Desserts, Wine List i Drinks.',
      'Każda karta dania zawiera zdjęcie, nazwę, opis, cenę, kategorię i przycisk Add to cart. Struktura kart utrzymuje praktyczność zamawiania, a scena stołu wyróżnia koncept.',
    ],
    cartTitle: 'UX koszyka',
    cart: [
      'Koszyk wygląda jak restauracyjny rachunek położony na tym samym drewnianym stole. Checkout pozostaje częścią atmosfery restauracji, zamiast stawać się generycznym e-commerce.',
      'Koszyk zawiera nazwę dania, ilość, cenę jednostkową, sumę, kontrolki plus/minus, usunięcie, subtotal, service fee, total, pola kontaktowe i przycisk Place Order.',
      'Pusty stan “Your table is still empty” prowadzi użytkownika z powrotem do menu i utrzymuje restauracyjną metaforę.',
    ],
    aboutTitle: 'UX strony About',
    about: [
      'Strona About jest zaprojektowana jak cichy kącik restauracji, a nie zwykła strona tekstowa.',
      'Jej celem jest budowanie zaufania przez historię, miejsce, ludzi i atmosferę. Bloki About Us, Our Philosophy, The Chef, The Place, zdjęcia i CTA wspierają emocjonalną decyzję.',
    ],
    visualTitle: 'Wizualne uzasadnienie UX',
    visual: [
      'Ciepłe światło dzienne, ciemne drewno, kremowa ceramika, winne tony, oliwkowa zieleń, pomidorowa czerwień i miękkie cienie tworzą bogatą atmosferę restauracji.',
      'Interfejs unika generycznych szablonów. Jest edytorialny, ciepły, taktylny i premium, ale zachowuje czytelny kontrast.',
    ],
    visualDecisions: [
      'Drewniany stół tworzy fizyczny kontekst.',
      'Realne dania stają się elementami nawigacji.',
      'Ciepłe światło buduje zaproszenie.',
      'Serif dodaje elegancji.',
      'Sans-serif utrzymuje czytelność interfejsu.',
      'Koszyk-rachunek łączy zamówienie z metaforą restauracji.',
    ],
    microTitle: 'Mikrointerakcje',
    microPurpose: 'Mikrointerakcje ożywiają stół i jednocześnie potwierdzają, co można kliknąć.',
    micro: [
      'Podświetlenie dania przy hover',
      'Delikatny zoom klikalnych obiektów',
      'Para lub połysk na jedzeniu',
      'Tooltip z etykietą kategorii',
      'Zoom kamery do wybranego obiektu',
      'Panel menu pojawia się obok dania',
      'Potwierdzenie Add to cart',
      'Kontrolki ilości w koszyku',
      'Automatyczna aktualizacja rachunku',
    ],
    responsiveTitle: 'Responsive UX',
    responsive: [
      ['Desktop', 'Pełna scena stołu jest głównym doświadczeniem. Użytkownik eksploruje stół wizualnie.'],
      ['Tablet', 'Stół pozostaje widoczny, a interaktywne elementy są większe i łatwiejsze do dotknięcia.'],
      ['Mobile', 'Scena zmienia się w pionową listę kategorii na atmosferycznym tle. To chroni użyteczność, zamiast wymuszać skomplikowaną scenę na małym ekranie.'],
    ],
    techTitle: 'Techniczna logika UX',
    tech: [
      'Projekt używa React i localStorage, aby obsłużyć prosty flow zamówienia.',
      'Dane koszyka są zapisywane w localStorage, produkty można dodawać z każdej strony, ilość można zmieniać, sumy aktualizują się automatycznie, a koszyk zostaje po odświeżeniu.',
    ],
    componentsLabel: 'Główne komponenty',
    components: ['App', 'HomePage', 'AboutPage', 'CartPage', 'MenuPage', 'TableScene', 'DishHotspot', 'MenuCategory', 'DishCard', 'CartItem', 'Header', 'Footer'],
    accessibilityTitle: 'Dostępność',
    accessibility: [
      'Jasne etykiety dla klikalnych obiektów',
      'Dostęp klawiaturą do hotspotów',
      'Widoczne stany focus',
      'Czytelny kontrast na kartach menu',
      'Alternatywna lista kategorii na mobile',
      'Brak kluczowych informacji ukrytych tylko w obrazach',
      'Duże pola dotyku',
      'Jasne kontrolki koszyka',
      'Opcja reduced motion',
    ],
    decisionsTitle: 'Kluczowe decyzje projektowe',
    decisions: [
      ['01', 'Stół jako interfejs', 'Stół restauracyjny staje się stroną główną, ponieważ natychmiast komunikuje jedzenie, atmosferę i interakcję.'],
      ['02', 'Obiekty jako nawigacja', 'Każdy element na stole zastępuje standardowy link menu i sprawia, że kategorie są bardziej pamiętne.'],
      ['03', 'Hover jako odkrywanie', 'Miękkie podświetlenia i etykiety pomagają rozpoznać klikalne obszary bez długich instrukcji.'],
      ['04', 'Koszyk jako rachunek', 'Koszyk wygląda jak rachunek restauracyjny, aby checkout pozostał częścią dining concept.'],
      ['05', 'Uproszczenie na mobile', 'Na mobile interfejs staje się bardziej liniowy, aby chronić użyteczność.'],
      ['06', 'Atmosfera przed szablonem', 'Projekt stawia nastrój restauracji ponad generyczny layout food delivery.'],
    ],
    resultTitle: 'Rezultat',
    result: 'Finalna koncepcja zmienia stronę restauracji w interaktywną scenę przy stole. Użytkownicy eksplorują stół, odkrywają kategorie przez dania, przeglądają pełne menu, dodają pozycje do koszyka i składają zamówienie.',
    reflectionTitle: 'Refleksja',
    reflection: [
      'Projekt bada, jak fizyczne rytuały jedzenia mogą stać się cyfrowymi wzorcami interakcji.',
      'Najmocniejszą częścią koncepcji jest relacja obiektu i akcji: jedzenie nie jest tylko dekoracją, ale nawigacją.',
      'W dalszym rozwoju projekt mógłby dodać logikę rezerwacji, dostawę, filtry dietetyczne, animowane potwierdzenie zamówienia i silniejszy CMS dla menu.',
    ],
  },
  uk: {
    pageLabel: 'UX-кейс',
    title: 'Italian Table Restaurant',
    subtitle: 'Проєктування ресторанного столу як інтерактивного меню',
    intro: 'Портфоліо-кейс про імерсивний сайт італійського ресторану, де головна сторінка стає сценою за столом, а страви перетворюються на навігацію.',
    live: 'Відкрити проєкт',
    github: 'Відкрити GitHub',
    language: 'Мова кейсу',
    meta: [
      ['Роль', 'UX/UI Designer'],
      ['Тип проєкту', 'Концепт сайту ресторану'],
      ['Фокус', 'Інтерактивна навігація · Food Experience · Атмосферний UI · Кошик замовлення'],
      ['Формат', 'Багатосторінковий сайт на React'],
    ],
    overviewTitle: 'Огляд проєкту',
    overview: [
      'Цей концепт переосмислює сайт ресторану як імерсивний досвід за обіднім столом.',
      'Замість стандартного hero-блоку, сітки навігації або списку категорій користувач потрапляє за стіл всередині італійського ресторану. Кожен предмет має призначення: паста відкриває Main Courses, стейк — Second Courses, тірамісу — Desserts, вино — Wine List, паперове меню — повне меню, а чек веде до кошика.',
      'Мета — зробити відкриття меню більш емоційним і памʼятним, але зберегти практичні дії: перегляд страв, додавання до кошика та оформлення замовлення.',
    ],
    problemTitle: 'UX-проблема',
    problem: [
      'Більшість сайтів ресторанів функціональні, але не запамʼятовуються. Вони зазвичай повторюють один патерн: hero-зображення, кнопка меню, картки страв, контактний блок. Це працює, але рідко передає атмосферу закладу.',
      'Виклик полягав у тому, щоб створити сайт, де користувач одразу відчуває місце, їжу й настрій вечері ще до читання тексту.',
    ],
    problemStatement: 'Як перетворити ресторанне меню на досвід, не ускладнивши процес замовлення?',
    goalsTitle: 'UX-цілі',
    goals: [
      'Перетворити ресторанний стіл на головний інтерфейс.',
      'Використати їжу та предмети як елементи навігації.',
      'Зберегти атмосферність без втрати зручності.',
      'Залишити замовлення й кошик зрозумілими.',
      'Підтримати перегляд за категоріями та повне меню.',
      'Зберегти читабельність на desktop, tablet і mobile.',
    ],
    journeyTitle: 'Шлях користувача',
    journeyNote: 'Шлях повторює відчуття, ніби користувач сидить за столом і вибирає з того, що лежить перед ним.',
    journey: ['Вхід на головну', 'Дослідження сцени столу', 'Hover на страву або предмет', 'Поява підпису категорії', 'Клік на інтерактивний обʼєкт', 'Відкриття категорії меню', 'Вибір страви', 'Додавання до кошика', 'Перегляд кошика-чека', 'Оформлення замовлення'],
    navTitle: 'Навігаційна концепція',
    navIntro: 'Головна навігація побудована навколо фізичних обʼєктів. Замість стандартного списку категорій користувач взаємодіє з предметами на столі.',
    navItems: [
      ['Паста', 'Main Courses'],
      ['Стейк', 'Second Courses'],
      ['Тірамісу', 'Desserts'],
      ['Келих вина', 'Wine List'],
      ['Паперове меню', 'Full Menu'],
      ['Чек', 'Cart / Order'],
    ],
    interactionTitle: 'Логіка взаємодій',
    interaction: [
      'Hover-стани допомагають зрозуміти, що можна натиснути. При наведенні страва або предмет отримує мʼяке підсвічування, легке збільшення, пару, блиск або glow. Короткий підпис підтверджує категорію.',
      'Після кліку камера візуально наближається до вибраного обʼєкта, а потім відкривається відповідний розділ меню. Так фізичний стіл і цифрова категорія відчуваються повʼязаними.',
    ],
    hierarchyTitle: 'Ієрархія інформації',
    hierarchy: ['Сцена столу', 'Інтерактивні обʼєкти', 'Підпис категорії', 'Категорія меню', 'Картка страви', 'Add to Cart', 'Кошик у вигляді чека'],
    hierarchyNote: 'Інформація відкривається поступово: спершу атмосфера, потім вибір категорії, далі конкретні страви.',
    menuTitle: 'UX меню',
    menu: [
      'Меню поділене на зрозумілі ресторанні категорії: Antipasti, Main Courses, Second Courses, Desserts, Wine List і Drinks.',
      'Кожна картка містить фото, назву, опис, ціну, категорію та кнопку Add to cart. Структура карток робить замовлення практичним, а сцена столу зберігає унікальність концепту.',
    ],
    cartTitle: 'UX кошика',
    cart: [
      'Кошик оформлений як ресторанний чек на тому самому деревʼяному столі. Checkout залишається повʼязаним з атмосферою ресторану, а не перетворюється на типовий e-commerce flow.',
      'Кошик містить назву страви, кількість, ціну за одиницю, суму, plus/minus controls, видалення, subtotal, service fee, total, контактні поля й кнопку Place Order.',
      'Порожній стан “Your table is still empty” повертає користувача до меню та підтримує ресторанну метафору.',
    ],
    aboutTitle: 'UX сторінки About',
    about: [
      'Сторінка About спроєктована як тихий куточок ресторану, а не звичайна текстова сторінка.',
      'Її мета — будувати довіру через історію, місце, людей і атмосферу. Блоки About Us, Our Philosophy, The Chef, The Place, фото та CTA підтримують емоційне рішення.',
    ],
    visualTitle: 'Візуальна UX-логіка',
    visual: [
      'Тепле денне світло, темне дерево, кремова кераміка, винні відтінки, оливковий, томатний і мʼякі тіні створюють багату ресторанну атмосферу.',
      'Інтерфейс уникає шаблонного вигляду. Він відчувається редакційним, теплим, тактильним і premium, але зберігає зрозумілий контраст.',
    ],
    visualDecisions: [
      'Деревʼяний стіл створює фізичний контекст.',
      'Реальні страви стають навігаційними елементами.',
      'Тепле світло робить досвід гостинним.',
      'Serif додає елегантності.',
      'Sans-serif зберігає ясність інтерфейсу.',
      'Кошик-чек повʼязує замовлення з ресторанною метафорою.',
    ],
    microTitle: 'Мікровзаємодії',
    microPurpose: 'Мікровзаємодії оживляють стіл і водночас підтверджують, що можна натиснути.',
    micro: [
      'Підсвічування страви при hover',
      'Мʼякий zoom клікабельних обʼєктів',
      'Пара або блиск при hover',
      'Tooltip з назвою категорії',
      'Наближення камери до вибраного предмета',
      'Панель меню поруч зі стравою',
      'Підтвердження Add to cart',
      'Контроли кількості в кошику',
      'Автоматичне оновлення чека',
    ],
    responsiveTitle: 'Responsive UX',
    responsive: [
      ['Desktop', 'Повна сцена столу є головним досвідом. Користувач досліджує стіл візуально.'],
      ['Tablet', 'Стіл залишається видимим, а інтерактивні елементи стають більшими та зручнішими для дотику.'],
      ['Mobile', 'Сцена перетворюється на вертикальний список категорій на атмосферному фоні. Це захищає usability і не змушує складну сцену ламатися на малому екрані.'],
    ],
    techTitle: 'Технічна UX-логіка',
    tech: [
      'Проєкт використовує React і localStorage для простої логіки замовлення.',
      'Дані кошика зберігаються в localStorage, товари можна додавати з будь-якої сторінки, кількість змінюється, суми перераховуються автоматично, а кошик залишається після перезавантаження.',
    ],
    componentsLabel: 'Основні компоненти',
    components: ['App', 'HomePage', 'AboutPage', 'CartPage', 'MenuPage', 'TableScene', 'DishHotspot', 'MenuCategory', 'DishCard', 'CartItem', 'Header', 'Footer'],
    accessibilityTitle: 'Accessibility considerations',
    accessibility: [
      'Зрозумілі labels для клікабельних обʼєктів',
      'Доступ до hotspots з клавіатури',
      'Видимі focus-стани',
      'Читабельний контраст на картках',
      'Альтернативний список категорій на mobile',
      'Важлива інформація не захована лише в зображеннях',
      'Великі tap targets',
      'Зрозумілі контроли кошика',
      'Підтримка reduced motion',
    ],
    decisionsTitle: 'Ключові дизайн-рішення',
    decisions: [
      ['01', 'Стіл як інтерфейс', 'Ресторанний стіл стає головною сторінкою, бо одразу передає їжу, атмосферу й взаємодію.'],
      ['02', 'Обʼєкти як навігація', 'Кожен предмет на столі замінює стандартне посилання меню та робить категорії більш памʼятними.'],
      ['03', 'Hover як discovery', 'Мʼякі підсвічування й підписи допомагають зрозуміти клікабельні зони без довгих інструкцій.'],
      ['04', 'Кошик у вигляді чека', 'Кошик спроєктований як ресторанний рахунок, щоб checkout залишався частиною dining concept.'],
      ['05', 'Спрощення на mobile', 'На mobile інтерфейс стає лінійнішим, щоб зберегти зручність.'],
      ['06', 'Атмосфера перед шаблоном', 'Дизайн ставить настрій ресторану вище generic food delivery layout.'],
    ],
    resultTitle: 'Результат',
    result: 'Фінальний концепт перетворює сайт ресторану на інтерактивну dining scene. Користувачі досліджують стіл, відкривають категорії через страви, переглядають повне меню, додають позиції до кошика та оформлюють замовлення.',
    reflectionTitle: 'Рефлексія',
    reflection: [
      'Проєкт досліджує, як фізичні ресторанні ритуали можуть стати цифровими патернами взаємодії.',
      'Найсильніша частина концепту — звʼязок обʼєкта й дії: їжа тут не лише декор, а навігація.',
      'У подальшому проєкт можна розширити логікою бронювання, доставкою, dietary filters, анімованим підтвердженням замовлення та CMS для меню.',
    ],
  },
};

function TextBlock({ title, paragraphs, children }) {
  return <section className="case-section">
    <div className="case-section__head">
      <span className="kicker">Case detail</span>
      <h2>{title}</h2>
    </div>
    <div className="case-section__body">
      {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {children}
    </div>
  </section>;
}

export function CaseStudyPage() {
  const [language, setLanguage] = useState(() => localStorage.getItem('tavola-case-language') || 'en');
  const t = copy[language] || copy.en;
  const langAttributes = useMemo(() => ({ lang: language === 'uk' ? 'uk' : language }), [language]);

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem('tavola-case-language', nextLanguage);
  };

  return <main className="page page--case" {...langAttributes}>
    <Header tone="dark"/>
    <section className="case-hero">
      <div className="case-hero__shade"/>
      <div className="case-hero__content shell">
        <div className="case-hero__copy">
          <span className="kicker kicker--cream">{t.pageLabel}</span>
          <h1>{t.title}</h1>
          <p className="case-hero__subtitle">{t.subtitle}</p>
          <p className="case-hero__intro">{t.intro}</p>
          <div className="case-hero__actions">
            <Link to="/" className="button button--cream">{t.live} <span>→</span></Link>
            <a className="button button--ghost" href="https://github.com/yanyoellis/Tavola-Nostra" target="_blank" rel="noreferrer">{t.github} <span>↗</span></a>
          </div>
        </div>
        <aside className="case-language" aria-label={t.language}>
          <span>{t.language}</span>
          <div>
            {languages.map((item) => <button
              key={item.id}
              className={language === item.id ? 'case-language__button case-language__button--active' : 'case-language__button'}
              type="button"
              onClick={() => changeLanguage(item.id)}
            >
              {item.label}
            </button>)}
          </div>
        </aside>
      </div>
    </section>

    <section className="case-meta shell">
      {t.meta.map(([label, value]) => <article key={label}>
        <span>{label}</span>
        <p>{value}</p>
      </article>)}
    </section>

    <div className="case-study shell">
      <TextBlock title={t.overviewTitle} paragraphs={t.overview}/>

      <TextBlock title={t.problemTitle} paragraphs={t.problem}>
        <blockquote>{t.problemStatement}</blockquote>
      </TextBlock>

      <TextBlock title={t.goalsTitle}>
        <ul className="case-list">{t.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
      </TextBlock>

      <TextBlock title={t.journeyTitle}>
        <div className="case-flow">{t.journey.map((step, index) => <React.Fragment key={step}>
          <span>{step}</span>
          {index < t.journey.length - 1 && <b>↓</b>}
        </React.Fragment>)}</div>
        <p>{t.journeyNote}</p>
      </TextBlock>

      <TextBlock title={t.navTitle} paragraphs={[t.navIntro]}>
        <div className="case-map">
          {t.navItems.map(([object, destination]) => <article key={object}>
            <span>{object}</span>
            <b>{destination}</b>
          </article>)}
        </div>
      </TextBlock>

      <TextBlock title={t.interactionTitle} paragraphs={t.interaction}/>

      <TextBlock title={t.hierarchyTitle}>
        <div className="case-flow case-flow--compact">{t.hierarchy.map((step, index) => <React.Fragment key={step}>
          <span>{step}</span>
          {index < t.hierarchy.length - 1 && <b>↓</b>}
        </React.Fragment>)}</div>
        <p>{t.hierarchyNote}</p>
      </TextBlock>

      <TextBlock title={t.menuTitle} paragraphs={t.menu}/>
      <TextBlock title={t.cartTitle} paragraphs={t.cart}/>
      <TextBlock title={t.aboutTitle} paragraphs={t.about}/>

      <section className="case-image-row">
        <img src="/images/hero-table.png" alt="Top-down Italian table interface"/>
        <img src="/images/cart.png" alt="Receipt-style cart on wooden table"/>
        <img src="/images/about.png" alt="Atmospheric restaurant interior"/>
      </section>

      <TextBlock title={t.visualTitle} paragraphs={t.visual}>
        <ul className="case-list case-list--two">{t.visualDecisions.map((item) => <li key={item}>{item}</li>)}</ul>
      </TextBlock>

      <TextBlock title={t.microTitle}>
        <ul className="case-list case-list--two">{t.micro.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>{t.microPurpose}</p>
      </TextBlock>

      <TextBlock title={t.responsiveTitle}>
        <div className="case-card-grid">
          {t.responsive.map(([label, text]) => <article key={label}>
            <span>{label}</span>
            <p>{text}</p>
          </article>)}
        </div>
      </TextBlock>

      <TextBlock title={t.techTitle} paragraphs={t.tech}>
        <h3>{t.componentsLabel}</h3>
        <div className="case-tags">{t.components.map((component) => <span key={component}>{component}</span>)}</div>
      </TextBlock>

      <TextBlock title={t.accessibilityTitle}>
        <ul className="case-list case-list--two">{t.accessibility.map((item) => <li key={item}>{item}</li>)}</ul>
      </TextBlock>

      <TextBlock title={t.decisionsTitle}>
        <div className="case-decisions">
          {t.decisions.map(([number, title, text]) => <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>)}
        </div>
      </TextBlock>

      <section className="case-finale">
        <div>
          <span className="kicker">{t.resultTitle}</span>
          <h2>{t.result}</h2>
        </div>
        <div>
          <h3>{t.reflectionTitle}</h3>
          {t.reflection.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
    </div>
    <Footer/>
  </main>;
}
