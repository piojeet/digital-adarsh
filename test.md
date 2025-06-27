const boxes = document.querySelectorAll('.hero__image-row-d');
const delayBetween = 2000; // time between each random action

function getRandomIndex() {
    return Math.floor(Math.random() * boxes.length);
}

function rotateBoxLoop() {
    const index = getRandomIndex();
    const box = boxes[index];

    if (box.classList.contains('rotated')) {
        // 🔁 If already rotated, unrotate it
        box.classList.remove('rotated');
    } else {
        // ✅ Else, rotate it
        box.classList.add('rotated');
    }

    // 🔁 Call again after delay
    setTimeout(rotateBoxLoop, delayBetween);
}

// 🔁 Start the loop
// rotateBoxLoop();



const scrollTrack = document.getElementById('scrollTrack');
const logoContainer = document.getElementById('logoContainer');

// Step 1: Duplicate the logos to create a seamless loop
scrollTrack.innerHTML += scrollTrack.innerHTML;

// Step 2: Set up variables for scrolling
let position = 0;
const speed = 1.5; // px per frame

function animate() {
    position -= speed;
    // Reset position when half the scroll track has moved
    if (Math.abs(position) >= scrollTrack.scrollWidth / 2) {
        position = 0;
    }
    scrollTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

// Start animation
// animate();