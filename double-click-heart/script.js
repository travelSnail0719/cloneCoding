const carImageEl = document.querySelector('.imageCar');
const clickCntEl = document.getElementById('clickCnt');

let clickCnt = clickCntEl.innerText;

carImageEl.addEventListener('dblclick', (e) => {

    const makeHeart = document.createElement('i');
    makeHeart.classList.add('fas');
    makeHeart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const offSetX = e.target.offsetLeft;
    const offSetY = e.target.offsetTop;

    const calX = x - offSetX;
    const calY = y - offSetY;

    makeHeart.style.top = `${calY}px`;
    makeHeart.style.left = `${calX}px`;

    carImageEl.appendChild(makeHeart);

    clickCntEl.innerText = ++clickCnt;
})