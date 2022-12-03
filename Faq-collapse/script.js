const buttonsEls = document.querySelectorAll('.faq-toggle');
const divEl = document.querySelectorAll('.faq')

buttonsEls.forEach((item, idx) => {
    item.addEventListener('click', () => {
        divEl[idx].classList.toggle('active');
    })
})