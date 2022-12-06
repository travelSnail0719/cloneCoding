const textAreaEl = document.querySelector('.textarea');
const divEl = document.querySelector('.divEl')

textAreaEl.addEventListener('keyup', (e) =>{
    const makeElement = e.target.value;
    const element = makeElement.split(',').filter(item => item.trim() !== '').map(item => item.trim());
    
    divEl.innerHTML = '';

    element.forEach(item => {
        const spanEl = document.createElement('span');
        spanEl.classList.add('tag');
        spanEl.innerText = item;
        divEl.appendChild(spanEl);

    });

    if(e.keyCode === 13){
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        selectRandom();
    }
})

const getRandomTag = () => {
    const tagsEl = document.querySelectorAll('.tag');
    return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

const addColor = (tagEl) => {
    tagEl.classList.add('highlight');
}

const removeColor = (tagEl) => {
    tagEl.classList.remove('highlight');
}

const selectRandom = () => {
    const interval = setInterval(() => {
        const getRandom = getRandomTag();

        addColor(getRandom);

        setTimeout(() => {
            removeColor(getRandom);
        }, 200)
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = getRandomTag();
            addColor(randomTag);
        }, 100)
    }, 3000);
}
