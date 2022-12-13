// const countEls = document.querySelectorAll('.count');

// window.addEventListener('DOMContentLoaded', () => {
//     let cnt = 0;
    
//     const increaseCnt = () => {
//         cnt = cnt + 20;
//         countEls[0].innerText = `${cnt}`;

//         if(cnt >= 12000){
//             clearInterval(startInterval);
//             cnt = 0;
//         }
//     }
//     let startInterval = setInterval(increaseCnt, 1);
// })


const counters = document.querySelectorAll('.count')

window.addEventListener('DOMContentLoaded', () => {
    counters.forEach(counter => {
        counter.innerText = '0'
    
        const updateCounter = () => {
            // html에 data-target에 있는 값을 가져온다.
            const target = +counter.getAttribute('data-target');
            // 각 list의 계산된 값을 담아줌
            const fans = +counter.innerText
            console.log('target', target);
            // 증가값
            const increment = target / 200;
            
            // data-target가 더 클 때
            if(fans < target) {
                // fans + increment을 반올림 해서 innerText를 해줌
                counter.innerText = `${Math.ceil(fans + increment)}`
                // 0.001초마다 실행
                setTimeout(updateCounter, 1)
            } else {
                // 마지막 값을 넣어줌
                counter.innerText = target
            }
        }
        updateCounter();
    })
});

