let closeBtn = document.querySelector('.close-button');
let glassBackground = document.querySelector('.glass-background');


let graphicLink = document.querySelector('.graphic-design-link');
let galleryGraphic = document.querySelector('.gallery-graphic-flex');

let webLink = document.querySelector('.web-design-link');
let galleryWeb = document.querySelector('.gallery-web-flex');

//========================================================================
function openGraphicGallery(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    glassBackground.style.zIndex = '1';
    glassBackground.style.opacity = '1';
    galleryGraphic.style.left = 'calc((100vw - 70vw) / 2)';
}

// Добавляем обработчики кликов на ссылки
if (graphicLink) {
    graphicLink.addEventListener('click', openGraphicGallery);
}


// Закрытие галереи
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        glassBackground.style.zIndex = '-1';
        glassBackground.style.opacity = '0';
        galleryGraphic.style.left = '-170vw'; 
    });
}

//========================================================================

function openWebGallery(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    glassBackground.style.zIndex = '1';
    glassBackground.style.opacity = '1';
    galleryWeb.style.left = 'calc((100vw - 70vw) / 2)';
}

// Добавляем обработчики кликов на ссылки


if (webLink) {
    webLink.addEventListener('click', openWebGallery);
}

// Закрытие галереи
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        glassBackground.style.zIndex = '-1';
        glassBackground.style.opacity = '0';
        galleryWeb.style.left = '-170vw'; 
    });
}