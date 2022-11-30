const containerEl = document.querySelector('.container');
const contentEl = document.querySelector('.content');

window.addEventListener('keydown', (e) => {
    // contentEl.style.display = 'none';

    containerEl.innerHTML = `<div class="content">${e.key === " " ? "Spcae" : e.key}
                             <small> event.key </small>
                             </div>
                             <div class="content">${e.keyCode}
                             <small> event.keyCode </small>
                             </div>
                             <div class="content">${e.code}
                             <small> event.Code </small>
                             </div>`
});