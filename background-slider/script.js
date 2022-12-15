const slideEl = document.querySelectorAll('.slide');
const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');

let cnt = 0;
//최초 실행 시 body에 배경 그려주기
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = slideEl[cnt].style.backgroundImage;
})

rightButton.addEventListener('click', () => {
    cnt++;
    if(cnt > slideEl.length -1){
        cnt = 0;
    }
    console.log('cnt', cnt);
    document.body.style.backgroundImage = slideEl[cnt].style.backgroundImage;
    roop();
    slideEl[cnt].classList.add('active');
});


leftButton.addEventListener('click', () => {
    cnt--;
    if(cnt < 0){
        cnt = slideEl.length-1;
    }
    document.body.style.backgroundImage = slideEl[cnt].style.backgroundImage;
    roop();
    slideEl[cnt].classList.add('active');
});

const roop = () => {
    slideEl.forEach(item => {
        item.classList.remove('active');
    })
}

