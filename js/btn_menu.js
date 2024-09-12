const div = document.querySelector('.center')
const menu = document.querySelector('.opciones-desplegado')
div.addEventListener('click', () => {
    div.classList.toggle('animated')
    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(-150px)';
      } else {
        menu.style.opacity = '1';
        menu.style.transform = 'translateX(0)';
      }
})