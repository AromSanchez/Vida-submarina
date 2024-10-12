const div = document.querySelector('.center');
const menu = document.querySelector('.opciones-desplegado');

div.addEventListener('click', () => {
    div.classList.toggle('animated');

    menu.classList.toggle('open');
});


