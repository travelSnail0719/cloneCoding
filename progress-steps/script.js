const circleList = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progress = document.getElementById('progress')

console.log('circleList', circleList);

let i = 0;

nextButton.addEventListener('click', () => {
    i++;

    if(i > circleList.length -1){
        i = circleList.length -1;
    }
    colorChange();
    clickNextButton();
});

prevButton.addEventListener('click', () => {
    i--;

    if(i < 0){
        i = 0;
    }
    colorChange();
    clickPrevButton();
})

const colorChange = () =>{
    if(i > 0){
        prevButton.disabled = false;
        if(i == circleList.length - 1){
            nextButton.disabled = true;
        }
    } else if(i <= 0){
        prevButton.disabled = true;
        nextButton.disabled = false;
    } 
}

const clickNextButton = () => {
    circleList.forEach(() => {
        circleList[i].classList.add('active');
        let value = (100 / (circleList.length - 1)) * i
        progress.style.width = `${value}%`;
    })
};

const clickPrevButton = () => {
    console.log('i', i);
    circleList[i + 1].classList.remove('active');
    let value = (100 / (circleList.length - 1)) * i
    progress.style.width = `${value}%`;
}