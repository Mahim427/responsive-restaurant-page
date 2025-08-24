// Show Menu
const toggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
})


// Auto Remove Menu on Mobile
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('show-menu');
    });
})


// Header Scroll Shadow
const header = document.querySelector('header');
const firstSec = document.querySelector('#home');
console.log(firstSec);

const headObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('scroll-shadow', !entry.isIntersecting);
}, {
    throttle: 0,
    rootMargin: `${firstSec.offsetHeight / -1.2}px 0px 0px 0px`,
});

headObserver.observe(firstSec);


// Dark / Light Theme
const themeBtn = document.querySelector('#theme-icon');

themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.className;

    if (currentTheme === 'dark') {
        themeBtn.classList.replace("bx-sun", "bx-moon");
    } else {
        themeBtn.classList.replace("bx-moon", "bx-sun");
    }
    document.body.classList.toggle('dark');
})

