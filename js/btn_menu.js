const div = document.querySelector('.center');
const menu = document.querySelector('.opciones-desplegado');
const main = document.querySelector('.main');

div.addEventListener('click', () => {
    div.classList.toggle('animated');

    const computedHeight = getComputedStyle(menu).height;

    if (computedHeight === '0px') {
        menu.style.height = '260px';
    } else {
        menu.style.height = '0';
    }
});
