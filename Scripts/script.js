var swiper = new Swiper(".mySwiper", {
});

const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navMenu.classList.toggle('open-menu');
})