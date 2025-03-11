let home = document.querySelector('.home');
let about = document.querySelector('.about');
let portfolio = document.querySelector('.portfolio');
let contact = document.querySelector('.contact');
let scrollDown = document.querySelector('.scroll-down'); 
let scrollUp = document.querySelector('.scroll-up');



scrollDown.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' });
});

scrollUp.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


function navigation() {
    home.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем обновление страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    about.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    });

    portfolio.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    });

    contact.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' });
    });
}

navigation();
