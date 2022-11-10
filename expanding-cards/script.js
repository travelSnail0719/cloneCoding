const classNameList = document.querySelectorAll('.panel');

console.log('classNameList', classNameList);
classNameList.forEach((item, idx) => {
    classNameList[idx].addEventListener('click', function(){
        classNameList.forEach((item2) => {
            item2.classList.remove('active');
        })
        item.classList.add('active');
    })
})