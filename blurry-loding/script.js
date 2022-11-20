const lodingCnt = document.querySelector('.lodingCnt');
const bgImg = document.querySelector('.bgImage');

window.addEventListener('DOMContentLoaded', () => {
    let cnt = 0;
    let blur = 25;
    
    lodingCnt.style.opacity = 1;
    bgImg.style.filter = `blur(${blur}px)`;

    const increaseCnt = () => {
        cnt++;
        lodingCnt.innerText = `${cnt}%`;
        lodingCnt.style.opacity -= 0.01;
        blur -= 0.25;
        bgImg.style.filter = `blur(${blur}px)`;
    
        if(cnt >= 100){
            clearInterval(aaa);
        }
    }
    let aaa = setInterval(increaseCnt, 30);
})