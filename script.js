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
const rainyDayAttirbute = '<a href="https://www.freepik.com/free-vector/rain-wind-old-town-with-retro-european-buildings-lake-promenade_12873478.htm#query=rainy%20day&position=0&from_view=search&track=sph">Image by upklyak</a> on Freepik'
const snowyDayAttribute = '<a href="https://www.freepik.com/free-vector/vintage-city-winter-street-with-european-colonial-victorian-buildings-lake-promenade_12760360.htm">Image by upklyak</a> on Freepik'
const sunnyDayAttribute = '<a href="https://www.freepik.com/free-vector/vintage-city-autumn-street-with-european-colonial-victorian-buildings-lake-promenade_12760784.htm?query=rainy day">Image by upklyak</a> on Freepik'
const windyDayAttribute = '<a href="https://www.freepik.com/free-vector/suburban-street-with-cottage-houses-autumn-day_30157581.htm#page=4&query=windy%20weather%20town&position=9&from_view=search&track=ais">Image by upklyak</a> on Freepik'
const foggyDayAttribute = '<a href="https://www.freepik.com/free-vector/medieval-german-street-with-halftimbered-houses-with-white-fog_13930899.htm#page=2&query=windy%20weather%20town&position=23&from_view=search&track=ais">Image by upklyak</a> on Freepik'
const lightningDayAttribute = '<a href="https://www.freepik.com/free-vector/medieval-german-night-street-rainy_13924248.htm#query=windy%20weather%20town&position=5&from_view=search&track=ais">Image by upklyak</a> on Freepik'
const form = document.getElementById('form')


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

form.addEventListener('submit', (e) => {
   e.preventDefault();
   getWeather();
})