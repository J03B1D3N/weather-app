const btn = document.querySelector('button')
const input = document.getElementById('search')
const p = document.querySelector('p')
const currentTemp = document.getElementById('currentTemp')
const feelsLikeTemp = document.getElementById('feelsLikeTemp')
const pressure = document.getElementById('pressure')
const maxTemp = document.getElementById('maxTemp')
const minTemp = document.getElementById('minTemp')
const wind = document.getElementById('wind')


const api_key = '21ad911d5f1719a1d5ce294eec8a1017'
const coordinates_api = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}'

async function getWeather() {
   try {
   const coordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=${api_key}`)
   const city = await coordinates.json();
   console.log(city)
   const weatherJson = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&appid=${api_key}`)
   const weather = await weatherJson.json();
   
   p.textContent = weather.name
   console.log(weather)
   currentTemp.textContent = 'temp ' + weather.main.temp
   feelsLikeTemp.textContent = 'jutimine ' +weather.main.feels_like
   pressure.textContent = weather.main.pressure + 'psi'
   maxTemp.textContent = weather.main.temp_max
   minTemp.textContent = weather.main.temp_min
   



   } catch (err) {
      console.log(err)
   }
}

btn.addEventListener('click', getWeather)