const textAreaEl = document.querySelector('.textArea');
const text = 'We Love Programming!'
const inputEl = document.getElementById('speed');
let speedValue = 300 / inputEl.value;

let i = 0;
window.addEventListener('DOMContentLoaded', () => {
    putText();
})

const putText = () => {
    textAreaEl.innerText = text.slice(0, i);
    i++;

    if(i > text.length){
        i = 0;
    }
    setTimeout(putText, speedValue);
}

inputEl.addEventListener('input', (e) => {
    speedValue = 300 / e.target.value;
})