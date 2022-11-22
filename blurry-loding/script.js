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
});

// 원작자 코드
/* const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
} */