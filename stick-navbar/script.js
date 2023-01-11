const navEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 160){
        navEl.classList.add('active');
    } else {
        navEl.classList.remove('active');
    }
})