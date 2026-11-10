const toggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');
toggle.addEventListener('click', () => {
    navItems.classList.toggle('show');
});