let lightModeBtn = document.getElementById('lightmode');
const htmlElement = document.documentElement;
let currentAudio = null;
/* let meImg = document.querySelector('.me-img'); */
let audioElement = document.querySelector('.music audio');


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-theme') {
    htmlElement.classList.add('dark-theme');
    lightModeBtn.textContent = 'LIGHT OFF';
    /* meImg.src = '/02_portfolio_simple/img/me-light.svg'; */
    audioElement.volume = 0.1;
} else {
    htmlElement.classList.remove('dark-theme');
    lightModeBtn.textContent = 'LIGHT ON';
    /* meImg.src = '/02_portfolio_simple/img/me-dark.svg'; */
    audioElement.volume = 0.4;
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

function playSound(src) {
    stopAudio();
    currentAudio = new Audio(src);
    currentAudio.play();
}

function toggleTheme() {
    
    const isDark = htmlElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark-theme' : 'light-theme');
    lightModeBtn.textContent = isDark ? 'LIGHT OFF' : 'LIGHT ON';

    if (isDark) {
        playSound('sound/click_off.mp3');
        meImg.src = 'img/me-light.svg';
        if (audioElement) audioElement.volume = 0.1;


    } else {
        playSound('sound/neon.mp3');
        
        if (audioElement) audioElement.volume = 0.4;
    }

}

lightModeBtn.addEventListener('click', toggleTheme);


