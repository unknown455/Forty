var menu = document.querySelector('.menu');
var menu_section = document.querySelector('.menu__section');
var close = document.querySelector('.close');

menu.addEventListener('click',function(){
    menu_section.style.opacity=1;
    menu_section.style.visibility='visible';
})

close.addEventListener('click',function(){
    menu_section.style.opacity=0;
    menu_section.style.visibility='hidden';
})