const container = document.querySelector('.container');
const nodeClassList = document.querySelectorAll('.split');

nodeClassList.forEach(item => {
    item.addEventListener('mouseover', () => {
        if(item.classList.contains('left')){
            container.classList.add('hover-left');
        } else {
            container.classList.add('hover-right');
        }
    })

    item.addEventListener('mouseout', () => {
        if(item.classList.contains('left')){
            container.classList.remove('hover-left');
        } else {
            container.classList.remove('hover-right');
        }
    })
})
