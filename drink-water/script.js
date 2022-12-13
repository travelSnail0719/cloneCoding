const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

window.addEventListener('DOMContentLoaded', () => {
    liters.innerText = `${litersText}L`;
})

smallCups.forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('full')){
            item.classList.remove('full');
            litersText = litersText + 0.25;
        } else {
            item.classList.add('full');
            litersText = litersText - 0.25;
        }
        liters.innerText = `${litersText}L`;
    })
})