const btn = document.querySelector('button')
const input = document.getElementById('search')
const p = document.querySelector('p')
const currentTemp = document.getElementById('currentTemp')
const feelsLikeTemp = document.getElementById('feelsLikeTemp')
const pressure = document.getElementById('pressure')
const maxTemp = document.getElementById('maxTemp')
const minTemp = document.getElementById('minTemp')
const weatherP = document.getElementById('weather')
const body = document.querySelector('body')


const api_key = '21ad911d5f1719a1d5ce294eec8a1017'
const coordinates_api = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}'

async function getWeather() {
   try {
   const coordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=${api_key}`)
   const city = await coordinates.json();
   console.log(city)
   const weatherJson = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&appid=${api_key}`)
   const weather = await weatherJson.json();
   
   p.textContent = city[0].name
   console.log(weather)
   currentTemp.textContent = 'Current temperature ' + weather.main.temp.toFixed(1) + '°C'
   feelsLikeTemp.textContent = 'Feels like ' +weather.main.feels_like.toFixed(1) + '°C'
   pressure.textContent = 'Atmospheric pressure ' + weather.main.pressure.toFixed(1)+ ' hPa'
   maxTemp.textContent = 'Max temperature ' + weather.main.temp_max.toFixed(1) + '°C'
   minTemp.textContent = 'Min temperature ' + weather.main.temp_min.toFixed(1) + '°C'
   weatherP.textContent = weather.weather[0].main
   



   } catch (err) {
      console.log(err)
   }
}

btn.addEventListener('click', getWeather)