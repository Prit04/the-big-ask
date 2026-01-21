const music = document.getElementById('bgMusic');

function nextPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show the requested page
    document.getElementById(`page${pageNumber}`).classList.add('active');
    
    // Start music on first click (browsers require user interaction)
    if(pageNumber === 2) {
        music.play().catch(e => console.log("Music play blocked until user interacts"));
    }
}

// "No" Button Logic for the final page
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// "Yes" Button Logic
document.getElementById('yesBtn').addEventListener('click', () => {
    nextPage(4);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Randomize position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    document.body.appendChild(heart);
    
    // Remove heart after it floats away
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);