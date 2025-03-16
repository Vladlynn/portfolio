/* window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none"; 
        document.getElementById("content").classList.remove("hidden"); 
    }, 3000); 
}; */


var typed = new Typed(".input",{
    strings:["Vlad Lynn.", "Web Developer.","UI/UX Designer.","3D Artist."],
    typedSpeed: 70,
    backSpeed: 60,
    loop: true
});


let webDesignLink = document.querySelector('.web-design-link');
let graphicDesignLink = document.querySelector('.graphic-design-link');

// Функция для обновления текста в зависимости от ширины экрана
function updateLinks() {
    if (window.innerWidth < 1100) {
        webDesignLink.innerHTML = 'Web <br> Design';
        graphicDesignLink.innerHTML = 'Graphic <br> Design';
    } else {
        webDesignLink.innerHTML = 'Web Design';
        graphicDesignLink.innerHTML = 'Graphic Design';
    }
}

// Запускаем обновление при загрузке страницы
updateLinks();

// Добавляем обработчик на изменение размера окна
window.addEventListener('resize', updateLinks);




/* SCROLL BAR NEON */
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


/*SCROLL-UP BUTTON */
let scrollUpButton = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.95) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
});

/* MUSIC */
document.querySelector('.volume').addEventListener('click', function () {
    let icon = this.querySelector('i');
    let audio = document.querySelector('audio');
  
    if (audio.muted) {
      audio.muted = false;
      icon.classList.replace('ri-volume-mute-fill', 'ri-volume-up-fill');
    } else {
      audio.muted = true;
      icon.classList.replace('ri-volume-up-fill', 'ri-volume-mute-fill');
    }
});

/* NEON CIRCLE */
document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".neon-circle");
    const randomDelay = Math.random() * 2; // случайная задержка от 0 до 2 секунд
    circle.style.animationDelay = `${randomDelay}s`;
});