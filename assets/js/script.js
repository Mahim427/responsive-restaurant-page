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


// Navbar dynamic coloring on different Sections
const sections = document.querySelectorAll('section');


// Set threshold based on screen size
function getThreshold() {
    if (window.innerWidth < 768) {
        return 0.3;
    } else {
        return 0.8;
    }
}

const mainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to corresponding link
            const id = entry.target.id;
            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    })
}, {
    threshold: getThreshold(),
})

sections.forEach(section => {
    mainObserver.observe(section);
})


// Header Scroll Shadow
const header = document.querySelector('header');
const firstSec = document.querySelector('#home');

const headObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('scroll-shadow', !entry.isIntersecting);
}, {
    threshold: 0.9,
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


// Scroll Top
const scrollTopBtn = document.querySelector('.scroll-top');

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
    });
})

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 600);
})