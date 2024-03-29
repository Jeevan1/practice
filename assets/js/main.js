
const nav = document.querySelector('.mobile__menu');
const header = document.querySelector('.header__area');
const menu = document.getElementById('menu');


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
