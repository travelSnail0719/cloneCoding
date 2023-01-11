const myCanvasEl = document.getElementById('myCanvas');
// 그림판에서 2D기능을 사용하기 위함
const context = myCanvasEl.getContext('2d');
const changeColorEl = document.getElementById('selsectColor');
const initialEl = document.getElementById('initial');
const decraseEl = document.getElementById('decrease');
const incraseEl = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const eraserEl = document.getElementById('eraser');

document.addEventListener('DOMContentLoaded', () => {    
    // 선 굵기
    context.lineWidth = 5;

    myCanvasEl.addEventListener('mousemove', (e) => {mouseMove(e)}, false);
    myCanvasEl.addEventListener('mousedown', (e) => {mouseDown(e)}, false);
    myCanvasEl.addEventListener('mouseup', () => {mouseUp()}, false);
    myCanvasEl.addEventListener('mouseout', () => {mouseOut()}, false);
    // 색상 변경
    changeColorEl.addEventListener('change', () => {
        context.strokeStyle = changeColorEl.value
    });

    initialEl.addEventListener('click', () => {
        location.reload();
    });

    let i = 5;
    sizeEl.textContent = i;
    // 굵기 증가
    incraseEl.addEventListener('click', () => {
        i += 5;

        if(i >= 50){
            i = 50;
        }

        context.lineWidth = i;
        sizeEl.textContent = i;
    });
    // 굵기 감소
    decraseEl.addEventListener('click', () => {
        i -= 5;

        if(i <= 5){
            i = 5;
        }

        context.lineWidth = i;
        sizeEl.textContent = i;
    })

    eraserEl.addEventListener('click', (e) => {
        context.strokeStyle = 'white';
    })
});

// 드래그를 하는 동안 처음 마우스가 눌려진 좌표
let startX = 0;
let startY = 0;
let dragging = false;

const mouseMove = (e) => {
    if(!dragging){
        return;
    }
    let curX = e.offsetX;
    let curY = e.offsetY;

    mouseDraw(curX, curY);

    startX = curX;
    startY = curY;
}

const mouseDraw = (curX, curY) => {
    // 마우스를 움직이면서 path를 만듦
    context.beginPath();
    // x, y좌표로 마우스를 옮김
    context.moveTo(startX, startY);
    // 현재 path의 마지막 점을 특정 좌표와 직선으로 연결
    context.lineTo(curX, curY);
    // 현재 stroke style로 현재의 path에 획을 긋는다.
    context.stroke();
}

const mouseDown = (e) => {
    startX = e.offsetX;
    startY = e.offsetY;
    dragging = true;
}

// 마우스 올리기만 했을 때
const mouseUp = () => {
    dragging = false;
}
// 마우스가 영역 밖으로 빠져나갔을 때
const mouseOut = () => {
    dragging = false;
}

// const deleteDraw = (e) => {
//     let curX = e.offsetX;
//     let curY = e.offsetY;

//     context.clearRect(curX, curY, 10, 10);
// }
