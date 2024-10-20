const navigation = document.querySelector('.navigation');
const showNav = document.querySelector(".mobile__nav");
const closeNav = document.querySelector(".mobile__nav__close");
const navbar = document.querySelector(".navbar");

const closeMobileMenu = () => navigation.classList.remove('is-active');
const showMobileMenu = () => navigation.classList.add('is-active');
const smallMenu = function(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navbar.classList.add('smallnavbar')
        
    } else{
        navbar.classList.remove('smallnavbar')

    }
}
document.addEventListener('scroll', smallMenu);
closeNav.addEventListener('click', closeMobileMenu)
showNav.addEventListener('click', showMobileMenu)
