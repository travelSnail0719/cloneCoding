const lodingCnt = document.querySelector('.lodingCnt');
const bgImg = document.querySelector('.bgImage');

// dom 실행 시 
window.addEventListener('DOMContentLoaded', () => {
    // 초기값 지정
    let cnt = 0;
    let blur = 25;
    lodingCnt.style.opacity = 1;
    bgImg.style.filter = `blur(${blur}px)`;

    // 각각 opacity와 blur 값 연산
    // setInterval을 통해 반복 함수 실행
    const increaseCnt = () => {
        cnt++;
        lodingCnt.innerText = `${cnt}%`;
        lodingCnt.style.opacity -= 0.01;
        blur -= 0.25;
        bgImg.style.filter = `blur(${blur}px)`;
    
        if(cnt >= 100){
            clearInterval(startInterval);
        }
    }
    let startInterval = setInterval(increaseCnt, 30);
})