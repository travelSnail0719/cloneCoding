const btnEl = document.querySelector('.btn');
const toastEl = document.getElementById('toast');


const toastContent = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const toastType = ['error', 'success', 'info'];

btnEl.addEventListener('click', () => {
    const createDiv = document.createElement('div');

    createDiv.classList.add('toast');
    createDiv.classList.add(toastType[Math.floor(Math.random() * toastType.length)]);
    createDiv.innerText = toastContent[Math.floor(Math.random() * toastContent.length)];

    toastEl.appendChild(createDiv);

    setTimeout(() => {
        createDiv.remove();
    }, 5000);
});