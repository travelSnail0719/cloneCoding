const settingEls = document.querySelectorAll('.setting > input');
const generateEl = document.getElementById('generate');
const lengthVal = document.getElementById('length');
const resultEl = document.getElementById('result');

const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const symbols = ['!','@','#','$','%','^','&','*','(',')', '{', '}', '_', '-', '+', '=', '|', '~'];


generateEl.addEventListener('click', () => {
    let fullPasswordArray = [];
    let finalPasswordArray = [];

    for(let i = 1; i < settingEls.length; i++){
        if(settingEls[i].checked){
            if(settingEls[i].getAttribute('id') === 'uppercase'){
                for(let i = 0; i < lengthVal.value; i++){
                    fullPasswordArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
                }
            }
            if(settingEls[i].getAttribute('id') === 'lowercase'){
                for(let i = 0; i < lengthVal.value; i++){
                    fullPasswordArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
                }
            }
            if(settingEls[i].getAttribute('id') === 'numbers'){
                for(let i = 0; i < lengthVal.value; i++){
                    fullPasswordArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
                }
            }
            if(settingEls[i].getAttribute('id') === 'symbols'){
                for(let i = 0; i < lengthVal.value; i++){
                    fullPasswordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
                }
            }
        }
    }
    for(let i = 0; i < lengthVal.value; i++){
        finalPasswordArray.push(fullPasswordArray[Math.floor(Math.random() * fullPasswordArray.length)]);
    }
    resultEl.innerText = finalPasswordArray.join('');
});

const clipboardEl = document.getElementById('clipboard');
// clipboard API사용
// document.ececCommand('copy')는 웹표준에서 Deprecated 되었음
clipboardEl.addEventListener('click', () =>{
    if(resultEl.innerText == ''){
        alert('비밀번호 생성되지 않았음');
        return false;
    }
    navigator.clipboard.writeText(resultEl.innerText).then(() =>{
        alert('비밀번호가 클립보드에 복사되었습니다.');
    })
});