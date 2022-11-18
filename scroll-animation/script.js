// box 클래스를 가지고 있는 태그 NodeList형태로 가져옴
const viewPortHeight = document.querySelectorAll('.box');
console.log(window.innerHeight);

document.addEventListener('scroll', () => {
    const eventHeight = window.innerHeight / 1.2;
    viewPortHeight.forEach(item => {
        // class 요소의 각 위치를 확인
        const getElementPoint = item.getBoundingClientRect().top;
         // 계속 내리다보면 top의 값은 더 작아지고 요소가 브라우저 안에 나타나는 순간 innerHeight의 값보다 줄어들게 된다. 이 때가 이벤트 발생지점!
        if(getElementPoint < eventHeight){
            console.log(getElementPoint, eventHeight)
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    })
})