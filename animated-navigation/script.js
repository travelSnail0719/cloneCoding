const buttonEl = document.getElementById('toggle');
const navEl = document.getElementById('nav');

buttonEl.addEventListener('click', () => {
    navEl.classList.toggle('active');
})