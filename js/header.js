const btnMenuOpen = document.querySelector('.open-nav');
const menu = document.querySelector('.menu');

btnMenuOpen.addEventListener('click', function(){
    menu.classList.toggle('active');
    btnMenuOpen.classList.toggle('open');
})

