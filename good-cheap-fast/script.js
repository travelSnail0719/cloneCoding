const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');
const toggleEls = document.querySelectorAll('.toggle');

toggleEls.forEach(item => {
    item.addEventListener('click', (event) => {
        if(goodEl.checked && cheapEl.checked && fastEl.checked){
            if('good' == event.target.id){
                fastEl.checked = false;
            }

            if('cheap' === event.target.id){
                goodEl.checked = false;
            }

            if('fast' === event.target.id){
                cheapEl.checked = false;
            }
        }
    })
})