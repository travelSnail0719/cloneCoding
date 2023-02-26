const addNotesEl = document.querySelector('#addNote');
let textArr = [];
addNotesEl.addEventListener('click', () => {
    const createNote = document.createElement('div');

    createNote.classList.add('note');

    createNote.innerHTML = `<div class="tools">
                                <button class="edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="delete">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                           </div>
                           <div class="main hidden"></div>
                           <textarea id="textArea"></textarea>`;

    const editButtonEl = createNote.querySelector('.edit');
    const textAreaEl = createNote.querySelector('#textArea');
    const mainEl = createNote.querySelector('.main');

    editButtonEl.addEventListener('click', () => {
        if(textAreaEl.value === '' || textAreaEl.value === null){
            alert('저장할 내역이 없습니다.');
            return false;
        } else {
            textArr.push(textAreaEl.value);
        }
        localStorage.setItem('note', JSON.stringify(textArr));
        mainEl.innerText = textAreaEl.value;
        textAreaEl.classList.toggle('hidden');
        mainEl.classList.toggle('hidden');
    });

    const deleteButtonEl = createNote.querySelector('.delete');

    deleteButtonEl.addEventListener('click', () => {
        createNote.remove();
        textArr = textArr.filter((t, idx) => {
            for (let k of Object.keys(t)) {
                if (t[k] !== textAreaEl.value) {
                    return true;
                }
            }
            return false;
        });
        localStorage.setItem('note', JSON.stringify(textArr));

        if(document.querySelectorAll('textarea').length === 0){
            localStorage.clear();
        }
    });
    document.body.appendChild(createNote);
});

