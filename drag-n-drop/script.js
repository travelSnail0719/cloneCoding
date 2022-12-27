const emptyEl = document.querySelectorAll('.empty');
const fillEl = document.querySelector('.fill');

emptyEl.forEach((item) => {
    // 드래그 시작 했을 때
    fillEl.addEventListener('dragstart', () => {
        fillEl.style.opacity = '0.2';
    });

    // 드래그 끝났을 때
    fillEl.addEventListener('dragend', () => {
        fillEl.style.opacity  = '1';
    });

    // 드래그 하면서 마우스가 대상 element위에 자리잡고 있을 때
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    // 마우스가 대상 element 위로 처음 진입 했을 때
    item.addEventListener('dragenter', () => {
        item.classList.add('hovered');
    });

    // 마우스가 대상 element를 떠났을 때
    item.addEventListener('dragleave', () => {
        item.classList.remove('hovered');
    });

    // 대상 element에 떨어뜨렸을 때
    item.addEventListener('drop', (e) => {
        item.classList.remove('hovered');
        item.append(fillEl);
        e.stopPropagation();
    });
})




