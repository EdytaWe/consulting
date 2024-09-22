const navigation = document.querySelector('.navigation');
const showNav = document.querySelector(".mobile__nav");
const closeNav = document.querySelector(".mobile__nav__close");

const closeMobileMenu = () => navigation.classList.remove('is-active');
const showMobileMenu = () => navigation.classList.add('is-active');


closeNav.addEventListener('click', closeMobileMenu)
showNav.addEventListener('click', showMobileMenu)
