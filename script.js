// Simple navigation toggle for small screens

document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('navMenu');
    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
