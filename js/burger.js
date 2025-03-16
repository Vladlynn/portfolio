let navigationList = document.querySelector('.navigation-list'); 
let hamburger = document.querySelector('.hamburger input');
/* let hamburgerIcon = document.querySelector('.hamburger'); */

let linkHome = document.querySelector('.home');
let linkAbout = document.querySelector('.about');
let linkPortfolio = document.querySelector('.portfolio');
let linkContact = document.querySelector('.contact');

let main = document.querySelector('main');
let footer = document.querySelector('footer');
let aboutMePage = document.querySelector('.about-me-page');
let portfolioPage = document.querySelector('.portfolio-page');
let contactPage = document.querySelector('.contact-page');


// Функция для переключения меню
function navListPosition() {
    if (!hamburger.checked) {
        navigationList.style.top = '-100%';
    } else {
        navigationList.style.top = '0';    
    }
}

// Закрытие меню при загрузке страницы
window.addEventListener('load', () => {
    navigationList.style.top = '-100%';
    hamburger.checked = false;
});

// Обработчик на изменение состояния чекбокса
hamburger.addEventListener('change', navListPosition);

// Функция закрытия меню при клике на ссылки
function closeNav() {
    navigationList.style.top = '-100%';
    hamburger.checked = false; // Сбрасываем состояние чекбокса
}

// Добавляем обработчик события для всех ссылок
linkHome.addEventListener('click', closeNav);
linkAbout.addEventListener('click', closeNav);
linkPortfolio.addEventListener('click', closeNav);
linkContact.addEventListener('click', closeNav);

