const API_KEY = `30a812ec66c4bd3b3b7ea677cf93d81f`

const weather = document.querySelector('.weather');
const form = document.querySelector('form');
const search = document.querySelector('#search');

const getWeather = async(city)=>{
  weather.innerHTML = `<h2>Loading...</h2>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showWeather(data)
  
}

getWeather('islamabad')

const showWeather = (data)=>{
  if(data.cod==='404'){
    weather.innerHTML = `<h2>No data found</h2>`
    return;
  }
weather.innerHTML = `

<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">



<div>
<p>${data.name}</p>
<h2>${data.main.temp} C</h2>
<p>${data.weather[0].main}</p>
</div>
`
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
  getWeather(search.value)
  
})

