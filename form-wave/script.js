const lable = document.querySelectorAll('.form-control label')

lable.forEach(item => {
                     // innerText로 각각 Email, Password의 text를 가져온 다음 split함수를 통해 배열화 시킴
    item.innerHTML = item.innerText.split('')
                                    // map을 통해 글자의 배열만큼 돌려주면서 css 먹여주기
                                   .map((text, idx) => `<span style="transition-delay: ${idx * 50}ms">${text}</span>`)
                                   // 배열화 되어있던 것을 다시 조합
                                   .join('');
})