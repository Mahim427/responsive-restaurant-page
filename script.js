// Show Menu
const showMenu = () => {
    console.log("Showing Menu");
    const toggle = document.querySelector('.menu-icon');
    const menu = document.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
    })
}

showMenu();

