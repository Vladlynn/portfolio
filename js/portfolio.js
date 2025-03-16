let webDesign = document.querySelector('.web-design');
let threeDDesign = document.querySelector('.three-d-design');
let webDesignText = document.querySelector('.web-design-text');
let threeDDesignText = document.querySelector('.three-d-design-text');

function withAnimation() {
    // Проверяем ширину экрана
    if (window.innerWidth < 1100) {
        // Если экран меньше 1100px, сбрасываем все стили
        webDesign.style.width = '50vw';
        threeDDesign.style.width = '50vw';
        webDesignText.style.transform = 'none';
        threeDDesignText.style.transform = 'none';
    } else {
        // Обрабатываем состояния при наведении мыши
        if (webDesign.matches(':hover')) {
            webDesign.style.width = '90vw';
            threeDDesign.style.width = '10vw';
            threeDDesignText.style.transform = 'rotate(-90deg)';
            webDesignText.style.transform = 'rotate(0deg)';
        } else if (threeDDesign.matches(':hover')) {
            webDesign.style.width = '10vw';
            threeDDesign.style.width = '90vw';
            webDesignText.style.transform = 'rotate(-90deg)';
            threeDDesignText.style.transform = 'rotate(0deg)';
        } else {
            // Если ни одно из состояний не выполнено, сбрасываем стили
            webDesign.style.width = '50vw';
            threeDDesign.style.width = '50vw';
            threeDDesignText.style.transform = 'rotate(0deg)';
            webDesignText.style.transform = 'rotate(0deg)';
        }
    }
}

// Добавляем обработчики событий для наведения и покидания
webDesign.addEventListener('mouseenter', withAnimation);
threeDDesign.addEventListener('mouseenter', withAnimation);
webDesign.addEventListener('mouseleave', withAnimation);
threeDDesign.addEventListener('mouseleave', withAnimation);
