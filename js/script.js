const linksnav = document.querySelectorAll('.menu__link');

linksnav.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});



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



document.querySelectorAll('.solution-header').forEach(header => {
    header.addEventListener('click', () => {
        const parentBox = header.parentElement;
        parentBox.classList.toggle('active');

        // Optional: Close others when one is opened
        document.querySelectorAll('.solution-box').forEach(box => {
            if (box !== parentBox) box.classList.remove('active');
        });
    });
});



let menuBtn = document.querySelector('.mob__menu-btn');
let menuList = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    document.body.classList.toggle('active');
})



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