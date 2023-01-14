const downButtonEl = document.querySelector('.down-button');
const upButtonEl = document.querySelector('.up-button');
const leftSlideEl = document.querySelector('.left-slide');
const rightSlideEl = document.querySelector('.right-slide');
const sliderLength = document.querySelectorAll('.left-slide div').length;

const topValue = -300;
leftSlideEl.style.top = `${topValue}vh`

// 원 작성자는 clientHeight를 통해 높이를 구했을 떄 915가 나오는데 나는 왜 895가 나올까??
const sliderHeight = 915;

let divCnt = 0;

downButtonEl.addEventListener('click', () => {
    divCnt--;
    if(divCnt < 0){
        divCnt = sliderLength - 1;
    }
    leftSlideEl.style.transform = `translateY(${sliderHeight * divCnt}px)`;
    rightSlideEl.style.transform = `translateY(-${sliderHeight * divCnt}px)`;
});

upButtonEl.addEventListener('click', () => {
    divCnt++;
    if(divCnt > sliderLength - 1){
        divCnt = 0;
    }
    leftSlideEl.style.transform = `translateY(${sliderHeight * divCnt}px)`;
    rightSlideEl.style.transform = `translateY(-${sliderHeight * divCnt}px)`;
});
