let lightModeBtn=document.getElementById("lightmode");const htmlElement=document.documentElement;let currentAudio=null,audioElement=document.querySelector(".music audio");const savedTheme=localStorage.getItem("theme");function stopAudio(){currentAudio&&(currentAudio.pause(),currentAudio.currentTime=0)}function playSound(e){stopAudio(),(currentAudio=new Audio(e)).play()}function toggleTheme(){let e=htmlElement.classList.toggle("dark-theme");localStorage.setItem("theme",e?"dark-theme":"light-theme"),lightModeBtn.textContent=e?"LIGHT OFF":"LIGHT ON",e?(playSound("sound/click_off.mp3"),meImg.src="img/me-light.svg",audioElement&&(audioElement.volume=.1)):(playSound("sound/neon.mp3"),audioElement&&(audioElement.volume=.4))}"dark-theme"===savedTheme?(htmlElement.classList.add("dark-theme"),lightModeBtn.textContent="LIGHT OFF",audioElement.volume=.1):(htmlElement.classList.remove("dark-theme"),lightModeBtn.textContent="LIGHT ON",audioElement.volume=.4),lightModeBtn.addEventListener("click",toggleTheme);