const music = document.getElementById('bgMusic');
const introText = "I made a little something for you...";
const letterText = `Hema,\n\nFrom the moment we started talking, I knew there was something special about you. Even with the distance, you’ve become the best part of my day...`;

let introIndex = 0;
let letterIndex = 0;

function typeIntro() {
    if (introIndex < introText.length) {
        document.getElementById('typewriter').innerHTML += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typeIntro, 80);
    }
}
setTimeout(typeIntro, 1200);

function typeLetter() {
    if (letterIndex < letterText.length) {
        document.getElementById('love-letter').innerHTML += letterText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, 50);
    } else {
        document.getElementById('cat-gif').classList.add('show');
    }
}

function nextPage(n) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${n}`).classList.add('active');
    if (n === 2) {
        music.play().catch(() => {});
        setTimeout(typeLetter, 500);
    }
}

// Sparkles logic
setInterval(() => {
    const s = document.createElement('div');
    s.classList.add('sparkle');
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.width = s.style.height = Math.random() * 5 + 2 + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1500);
}, 400);

// NEW High-Quality Heart Logic
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 3; 
    heart.style.animationDuration = duration + "s";
    const scale = Math.random() * 0.5 + 0.8;
    heart.style.transform = `rotate(-45deg) scale(${scale})`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// No Button Logic
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
        noBtn.style.position = 'fixed';
        noBtn.style.left = Math.random() * 80 + 'vw';
        noBtn.style.top = Math.random() * 80 + 'vh';
    });
}