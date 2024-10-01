// Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu__list');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu__list--active');
        overlay.classList.toggle('overlay--active');
        menuBtn.classList.toggle('menu__btn--active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('menu__list--active');
        overlay.classList.remove('overlay--active');
        menuBtn.classList.remove('menu__btn--active');
    });
});

// Валидация формы
document.querySelector('.contact__form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    let isValid = true;

    // Проверка имени (не более 20 символов)
    if (nameInput.value.trim() === "" || nameInput.value.length > 20) {
        nameInput.classList.add('error');
        nameInput.classList.remove('success');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
        nameInput.classList.add('success');
    }

    // Проверка email (только латинские буквы и не более 30 символов)
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value) || emailInput.value.length > 30) {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
    }

    // Проверка телефона (должно быть минимум 11 цифр после 8 или +7)
    if (!/^(\+7|8)\d{10}$/.test(phoneInput.value)) {
        phoneInput.classList.add('error');
        phoneInput.classList.remove('success');
        isValid = false;
    } else {
        phoneInput.classList.remove('error');
        phoneInput.classList.add('success');
    }

    if (isValid) {
        console.log('Форма отправлена');
    }
});


//Слайдер Проекты мобильный
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.projects__list');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Скорость прокрутки
        slider.scrollLeft = scrollLeft - walk;
    });
});