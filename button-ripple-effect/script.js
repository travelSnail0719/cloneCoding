const buttonEl = document.querySelectorAll('.ripple');

buttonEl.forEach(item => {
    item.addEventListener('click', (e) => {
        // 클릭 시점의 x,y 좌표 구하기
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        setTimeout(() => circle.remove(), 500);
    })
})