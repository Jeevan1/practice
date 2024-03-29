
const nav = document.querySelector('.mobile__menu');
const header = document.querySelector('.header__area');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav__links');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        showMenu();
    });
})


function showMenu(){
    
    if(menu.classList.contains('fa-xmark')){
        menu.classList.replace('fa-xmark','fa-bars');
        nav.classList.remove('show');
        nav.classList.add('hide');
        nav.style.display = 'none ';

    }
    else{
        menu.classList.replace('fa-bars','fa-xmark');
        nav.style.display = 'block ';
        nav.classList.remove('hide');
        nav.classList.add('show');
    }
}
window.onload = function() {
    window.addEventListener('scroll', function() {
        let topPosition = window.scrollY;
        if(topPosition>100){
            header.classList.add('background__header');
        }else{
            header.classList.remove('background__header');
        }
    });
    
}


function setActiveLink() {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
  
        if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight / 2) {
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav__links a[href="#${sectionId}"]`);
  
            document.querySelectorAll('.nav__links a').forEach(link => link.classList.remove('active'));
            correspondingNavLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);