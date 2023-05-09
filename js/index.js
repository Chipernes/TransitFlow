// Отримуємо елемент навігаційної панелі
const nav = document.querySelector('menu');
const header = document.querySelector('header');

// Зберігаємо початкову позицію навігаційної панелі
const navTop = nav.offsetTop;

const navHeight = nav.offsetHeight;
const headerHeight = header.offsetHeight;

// Додаємо обробник події прокрутки сторінки
window.addEventListener('scroll', () => {
    // Отримуємо поточну позицію сторінки
    const scrollPos = window.scrollY;

    // Якщо поточна позиція більша або рівна початковій позиції навігаційної панелі,
    // додаємо стиль з position: fixed;
    if (scrollPos >= navTop) {
        nav.classList.add('fixed_menu');
    } else {
        // В іншому випадку видаляємо стиль
        nav.classList.remove('fixed_menu');
    }

    if (scrollPos > headerHeight + navHeight) {
        nav.classList.add('nontransparent_menu');
    } else {
        // В іншому випадку видаляємо стиль
        nav.classList.remove('nontransparent_menu');
    }
});

// Додаємо обробник події повернення назад
window.addEventListener('popstate', () => {
    // Видаляємо стиль, якщо він був доданий раніше
    nav.classList.remove('fixed_menu');
});

