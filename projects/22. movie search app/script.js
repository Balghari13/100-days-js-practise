const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const container = document.querySelector('.container')

    const getMovies = async(url) =>{
      const response = await fetch(url)
      const data = await response.json();
      showMovies(data);
      
    }
    getMovies(APIURL)

    const showMovies = async(data) =>{
      container.innerHTML = ''
        data.results.forEach((item)=>{
          
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
          <img src=${IMGPATH+item.poster_path
          } alt="">
        
        <div class="infos">
          <div class="heading">
            <h2>${item.title}</h2>
            <h2>${item.
              vote_average}</h2>
          </div>
          <p>Overview</p>
          <p>${item.overview}.</p>
        </div>
          `
container.append(card)
        })
    }

    document.querySelector('.inputField').addEventListener('keyup',(e)=>{
      if(e.target.value !=''){
        console.log(e.target.value);
        
        getMovies(SEARCHAPI + e.target.value)
      }else{
        getMovies(APIURL)
      }
      
    })