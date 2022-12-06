const textAreaEl = document.querySelector('.textarea');
const divEl = document.querySelector('.divEl')

textAreaEl.addEventListener('keyup', (e) =>{
    const makeElement = e.target.value;
    // 입력 받은 숫자를 배열로 변환하고 공백 제거
    const element = makeElement.split(',').filter(item => item.trim() !== '').map(item => item.trim());
    
    divEl.innerHTML = '';
    // 배열을 반복문을 통해 span태그 생성 및 클래스명 주입
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
    // 동적생성 된 span태그
    const tagsEl = document.querySelectorAll('.tag');
    // span태그의 배열요소 중 랜덤으로 추출
    return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

const addColor = (tagEl) => {
    tagEl.classList.add('highlight');
}

const removeColor = (tagEl) => {
    tagEl.classList.remove('highlight');
}

const selectRandom = () => {
                    // setInterval 통해 0.2초마다 실행
    const interval = setInterval(() => {
        // 생성된 난수를 변수에 할당
        const getRandom = getRandomTag();
        // 생성된 난수에 해당하는 span태그에 클래스명 추가
        addColor(getRandom);
        // 클래스명을 받은 span태그에서 클래스명 제거
        setTimeout(() => {
            removeColor(getRandom);
        }, 200)
    }, 200);

    // 반복문 종료 하면서 마지막으로 랜덤 추출되는 span태그에 클래스명 추가
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = getRandomTag();
            addColor(randomTag);
        }, 100)
    }, 3000);
}
