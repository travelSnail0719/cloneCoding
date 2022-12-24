const toggleEl = document.querySelector('.toggle');
const htmlEl = document.querySelector('html');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const circleEl = document.querySelector('.circle');

toggleEl.addEventListener('click', (e) => {
    if(htmlEl.classList.contains('dark')){
        htmlEl.classList.remove('dark');
        // htmlEl.textContent = 'dark mode'; 로 할 경우 html문서 전체의 텍스트가 갈아끼워지게 됨
        e.target.textContent = 'dark mode';
    } else {
        htmlEl.classList.add('dark');
        e.target.textContent = 'lite mode';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setTime();
})

const setTime = () => {
    const dayArr = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", 'SATURDAY'];
    const monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const date = new Date();
    const day = date.getDay(); // 요일(0 ~ 6)
    const curDate = date.getDate();
    const getHour = date.getHours();
    const getAmPm = getHour >= 12 ? 'PM' : 'AM';
    const curTime = date.toString().substr(16, 5);
    const month = date.getMonth();
    

    timeEl.textContent = `${curTime} ${getAmPm}`
    dateEl.innerHTML = `${dayArr[day]}, ${monthArr[month]} <span class="circle">${curDate}</span>`
}

