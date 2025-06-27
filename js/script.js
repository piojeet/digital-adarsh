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



