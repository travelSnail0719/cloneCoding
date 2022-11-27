const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', () => {
    getJoke();
})
// async사용
// async function getJoke(){
//     const config = {
//         headers: {
//           Accept: 'application/json',
//         },
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config);
//     const data = await res.json();

//     console.log('data', data);

//     joke.innerHTML = data.joke;
// }


// then사용
const getJoke = () => {
    const config = {
        headers : {
            Accept : 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => {
            joke.innerHTML = data.joke
        })
}

btn.addEventListener('click', () => {
    getJoke();
})