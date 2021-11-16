const btnOpen = document.querySelector('.hamburger-btn');
const btnClose = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-items');
const menuItem = document.querySelectorAll('.menu-item');
const instructorsSection = document.querySelector('#instructors-list');

function openMenu() {
    btnOpen.style.display = 'none';
    menu.style.display = 'block';
}

function closeMenu() {
    btnOpen.style.display = 'block';
    menu.style.display = 'none';
}

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
menuItem.forEach((item) => {
    item.addEventListener('click', closeMenu);
})