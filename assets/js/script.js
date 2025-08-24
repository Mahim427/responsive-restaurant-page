// Show Menu
console.log("Showing Menu");
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


// Dark / Light Theme
const themeBtn = document.querySelector('#theme-icon');
console.log(themeBtn);

themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.className;

    if (currentTheme === 'dark') {
        themeBtn.classList.replace("bx-sun", "bx-moon");
    } else {
        themeBtn.classList.replace("bx-moon", "bx-sun");
    }
    document.body.classList.toggle('dark');
})

