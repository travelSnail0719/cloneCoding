const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const main = document.getElementById('main')
const searchEl = document.getElementById('search')


window.addEventListener('DOMContentLoaded', () => {
    getMovieInfo(API_URL);
})

const getMovieInfo = async(apiUrl) => {
    const config = {
        headers : {
            Accept : 'application/json'
        }
    }

    const res = await fetch(apiUrl, config);
    const data = await res.json();
    const result = data.results;
    console.log('data', data.results);

    main.innerHTML = '';
    
    result.forEach(item => {
        const movieEls = document.createElement('div');
        movieEls.classList.add('movie');
        
        movieEls.innerHTML = `<img src="${IMG_PATH + item.poster_path}" alt="${item.original_title}">
                                <div class="movie-info">
                                    <h3>${item.original_title}</h3>
                                    <span class="orange">${item.vote_average}</span>
                                </div>
                                <div class="overview">
                                    <h3>Overview</h3>
                                        ${item.overview}
                                </div>`
        main.appendChild(movieEls);
    });
}

searchEl.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        searchMovie();
        e.preventDefault();
        e.target.value = '';
    }
});

const searchMovie = () => {
    // debugger;
    let searchUrl = SEARCH_API + document.getElementById('search').value;
    console.log('searchUrl', searchUrl);
    // const res = await fetch(searchUrl);
    // const data = await res.json();

    getMovieInfo(searchUrl);
}   
