const openButton = document.querySelector('.btn_play');
const closeButton = document.querySelector('#closeDialog');
const dialog = document.getElementById('videoDialog');

openButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());