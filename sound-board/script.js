const buttonList = document.querySelectorAll('.btn');
const audio = new Audio();

buttonList.forEach((item, idx) => {
    item.addEventListener('click', () => {
        console.log(item.innerText);
        switch(item.innerText){
            case 'applause' :
                audio.src = 'applause.mp3'
                audio.play();
                break;
            case 'boo' :
                audio.src = 'boo.mp3'
                audio.play();
                break;
            case 'gasp' :
                audio.src = 'gasp.mp3'
                audio.play();
                break;
            case 'tada' :
                audio.src = 'tada.mp3'
                audio.play();
                break;
            case 'victory' :
                audio.src = 'victory.mp3'
                audio.play();
                break;
            case 'wrong' :
                audio.src = 'wrong.mp3'
                audio.play();
                break;
        }
    })
})