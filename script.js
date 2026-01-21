const music = document.getElementById('bgMusic');
const introText = "I made a little something for you...";
const letterText = `Hema,\n\nFrom the moment we started talking, I knew there was something special about you. Even with the distance, you’ve become the best part of my day...`;

let introIndex = 0;
let letterIndex = 0;
let burstInterval;

function nextPage(n) {
    const currentPage = document.querySelector('.page.active');
    const nextSection = document.getElementById(`page${n}`);
    const bg = document.getElementById('bg-visuals'); // Targeted background

    if (n === 2) {
        // 1. BLUR ONLY THE BACKGROUND
        bg.classList.add('blurred-bg');

        // 2. START THE HEART BURST
        for (let i = 0; i < 60; i++) {
            setTimeout(createBurstHeart, i * 15); 
        }

        // 3. HIDE PAGE 1 CONTENT IMMEDIATELY (Prevents centering ghost)
        if (currentPage) {
            currentPage.classList.add('exit-instant'); 
        }

        // 4. SWITCH TO PAGE 2
        setTimeout(() => {
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active', 'exit-instant', 'fade-in-up');
            });

            nextSection.classList.add('active', 'fade-in-up');

            document.getElementById('love-letter').innerHTML = "";
            letterIndex = 0;

            // 5. LIFT BLUR
            setTimeout(() => {
                bg.classList.remove('blurred-bg');
            }, 400);

            // 6. START TYPING
            setTimeout(() => {
                if (music) music.play().catch(() => {});
                typeLetter(); 
            }, 1200); 

        }, 1100); 

    } else {
        // Normal transition for other pages...
        if (currentPage) currentPage.classList.add('fade-out');
        setTimeout(() => {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active', 'fade-out'));
            nextSection.classList.add('active', 'fade-in-up');
        }, 800);
    }
}

function createBurstHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart', 'burst');
    heart.style.left = Math.random() * 100 + "vw";
    
    // Randomize the size slightly so some are HUGE and some are medium
    const scale = Math.random() * 1.5 + 0.8;
    heart.style.transform = `rotate(-45deg) scale(${scale})`;
    
    // Fast float speed
    const duration = Math.random() * 1.2 + 0.8; 
    heart.style.animationDuration = duration + "s";
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

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