const titleEl = document.getElementById('title');
const excerptEl = document.getElementById('excerpt');
const nameEl = document.getElementById('name');
const dateEl = document.getElementById('date');
const headerEl = document.getElementById('header');
const profileEl = document.getElementById('profile_img');
const animatedEl = document.querySelectorAll('.animated-bg');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(getContent, 3000);
})

const getContent = () => {
    const date = new Date();
    const getMonth = date.toString().substr(4,6);
    const getYear = date.toString().substr(11,4);

    titleEl.textContent = 'Lorem ipsum dolor sit amet';
    excerptEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    nameEl.textContent = 'chanBin Yim';
    dateEl.textContent = `${getMonth}, ${getYear}`;
    headerEl.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    profileEl.innerHTML =  '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

    animatedEl.forEach(item => {
        item.classList.remove('animated-bg');
    })
}