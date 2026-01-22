const music = document.getElementById('bgMusic');
const introText = "I made a little something for you...";
const letterText = `Hema,\n\n From the day I requested you and built the courage to send you my first message, I always knew that there was something special about you. We grew close, so close in the short amount of time and i couldn't have been more grateful for it. Kanmani, you are the centre of my universe; the treasure i will forever keep and admire, the one and only for me. \nI want to spend my whole life with you. You are the prettiest, most beautiful girl. I love your smile, your eyes, your hair, your cute laugh; everything about you, i adore. Your kindness, your affection, the way you make me feel so loved, appreciated and complete. That's something that means a lot to me princess. \nI hope as we spend our time together, our love and bond only grow stronger and flourishes. I look forward to spending every moment with you in my life. \nEven with the distance we have, you've become the best part of my day, and life. Hema my baby girl, I LOVE YOU deeply and dearly, and will continue to do so till my last breath.`;

let introIndex = 0;
let letterIndex = 0;
let burstInterval;

function nextPage(n) {
    const currentPage = document.querySelector('.page.active');
    const nextSection = document.getElementById(`page${n}`);
    const bg = document.getElementById('bg-visuals'); 

    // 1. Trigger the "Magic" (Blur + Hearts)
    if (bg) bg.classList.add('blurred-bg');

    // Create the Heart Burst
    for (let i = 0; i < 60; i++) {
        setTimeout(createBurstHeart, i * 15); 
    }

    // 2. Hide current page immediately to prevent ghosting
    if (currentPage) {
        currentPage.classList.add('exit-instant'); 
    }

    // 3. Switch to the next page
    setTimeout(() => {
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active', 'exit-instant', 'fade-in-up', 'fade-out');
        });

        nextSection.classList.add('active', 'fade-in-up');

        // 4. Page-Specific Logic
        
        // PAGE 2: The Letter
        if (n === 2) {
            document.getElementById('love-letter').innerHTML = "";
            letterIndex = 0;
            setTimeout(() => {
                if (music) music.play().catch(() => {});
                typeLetter(); 
            }, 1200);
        }

        // PAGE 3: The Rotating Heart (NEW)
        if (n === 3) {
            // Wait for the transition to finish, then build the heart
            setTimeout(() => {
                createTextHeart();
            }, 500);
        }

        // 5. Lift the blur as the new page settles
        setTimeout(() => {
            if (bg) bg.classList.remove('blurred-bg');
        }, 400);

    }, 1100); 
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
        document.getElementById("love-letter").innerHTML += letterText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, 50);
    } else {
        // Just add the show class, the CSS "margin-top: auto" handles the rest smoothly
        const catSection = document.getElementById("cat-gif");
        catSection.classList.add("show");
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

let heartAnimationId;
let heartPhase = 0;

function createTextHeart() {
    const container = document.getElementById('text-heart-container');
    // Added more variety to the phrases
    const sentences = [
        "I love you", "Kanmani", "My Everything", "En Anbe", 
        "Princess", "My World", "Baby girl", "En Uyire",
        "Forever yours", "Always you", "Mine", "Deeply in love"
    ];
    
    const totalSentences = 22; // Increased from 12 to 22 for a fuller look
    const colors = ["#ff4d6d", "#ff758f", "#c9184a", "#ff8fa3"]; // Shades of pink/red
    
    container.innerHTML = '';
    const spans = [];
    
    for (let i = 0; i < totalSentences; i++) {
        const span = document.createElement('span');
        span.className = 'heart-sentence';
        span.innerText = sentences[i % sentences.length];
        
        // Randomize color for depth
        span.style.color = colors[i % colors.length];
        
        container.appendChild(span);
        spans.push(span);
    }

    function animate() {
        heartPhase -= 0.007; // Negative makes it move clockwise
        
        spans.forEach((span, i) => {
            const t = ((i / totalSentences) * 2 * Math.PI) + heartPhase;
            
            // Heart Math
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            
            // Scale slightly larger (x9 instead of x8) to fill the screen better
            const posX = x * 9 + 150; 
            const posY = y * 9 + 150;
            
            span.style.left = `${posX}px`;
            span.style.top = `${posY}px`;
            
            // We adjust the rotation so the text "leans" into the curve
            span.style.transform = `translate(-50%, -50%) rotate(${t + Math.PI/2}rad)`;
        });

        heartAnimationId = requestAnimationFrame(animate);
    }

    animate();

// Inside your createTextHeart() function at the very bottom:

setTimeout(() => {
    const btn = document.getElementById('gameStartBtn');
    if (btn) {
        btn.classList.add('show');
    }
}, 4000); // Wait 4 seconds for her to admire the heart first
}

// Update your nextPage function to trigger the heart creation
// Inside your existing nextPage(n) function, add:
if (n === 3) {
    setTimeout(createTextHeart, 1500); // Start after transition
}