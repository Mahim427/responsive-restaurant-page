// Show Menu
console.log("Showing Menu");
const toggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
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

