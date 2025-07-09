// NAV LINK CLICK SMOOTH SCROLLING
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


// CUSTOM CURSOR
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






// ACCORDION
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


// RESPONSIVE MENU
let menuBtn = document.querySelector('.mob__menu-btn');
let menuList = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('active');
    document.body.classList.toggle('active');
})



// FORM DATA SEND TO GOOGLE SHEETS 
function formData() {
    const form = document.getElementById('contact-form');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzJ3LSf2PNtPc2Wt2Q2FQmX6vOGvFKBtOAx_CsAstzlkkRfuGZuTzyNrvzgX1gBswbW/exec';
  const submitButton = form.querySelector('.form-submit-button');

  const fields = {
    representing: form.elements['representing'],
    name: form.elements['name'],
    email: form.elements['email'],
    phone: form.elements['phone']
  };

  function validateField(name, field) {
    let isValid = true;
    const value = field.value.trim();

    switch (name) {
      case 'representing':
        if (value === '' || value === 'Please select On') isValid = false;
        break;
      case 'name':
        if (value === '') isValid = false;
        break;
      case 'email':
        if (!/^\S+@\S+\.\S+$/.test(value)) isValid = false;
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) isValid = false;
        break;
    }

    field.style.border = isValid ? '1px solid #ccc' : '1px solid red';
    return isValid;
  }

  // Realtime validation listeners
  Object.entries(fields).forEach(([name, field]) => {
    const eventType = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventType, () => validateField(name, field));
  });

  function validateForm() {
    let allValid = true;
    Object.entries(fields).forEach(([name, field]) => {
      const isValid = validateField(name, field);
      if (!isValid) allValid = false;
    });
    return allValid;
  }

  function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    submitButton.disabled = false;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm()) return;

    submitButton.disabled = true;

    const formData = new FormData(form);
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(() => {
        showPopup();
        form.reset();
        Object.values(fields).forEach(field => field.style.border = '1px solid #ccc');
      })
      .catch(() => {
        alert('Something went wrong!');
        submitButton.disabled = false;
      });
  });
}

formData();