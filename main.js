// texte defilant dans l'onglet
const body = document.querySelector("body")

const text = "PORTFOLIO"
document.title += text[0]
i=1
setInterval( _ =>{
  document.title+= text[i]
  i++
  if(i>text.length){
    document.title = text[0]
    i=1
  }
},400)

// gestion des étoiles
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('etoile');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    body.appendChild(star);
  }
});

// timer pour afficher l'image pause
let inactivityTimer;
let temps = Date.now();
let image;

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  clearInterval(image);
  temps = Date.now();
  document.getElementById("pause").style.display = "none";
  inactivityTimer = setTimeout(showImage, 180000); 
}

function showImage() {
  image = setInterval(() => {
    document.getElementById("pause").style.display = "block";
    document.getElementById("pause").style.position = "fixed";
    document.getElementById("pause").style.width = "100%";
    document.getElementById("pause").style.height = "100%";
    document.getElementById("pause").style.zIndex = "10";
  }, 3000);
}

document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("mousewheel", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("click", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);

resetInactivityTimer();