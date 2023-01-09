import "./style.scss";



(function () {
   let weather_app = {
      init: function() {
         this.cachingDom();
         this.bindEvents();
      },
      cachingDom: function() {

      this.btn = document.querySelector('button')
      this.input = document.getElementById('search')
      this.cityP = document.getElementById('city')
      this.currentTemp = document.getElementById('currentTemp')
      this.feelsLikeTemp = document.getElementById('feelsLikeTemp')
      this.pressure = document.getElementById('pressure')
      this.maxTemp = document.getElementById('maxTemp')
      this.minTemp = document.getElementById('minTemp')
      this.weatherP = document.getElementById('weather')
      this.body = document.querySelector('body')
      this.form = document.getElementById('form')
      this.api_key = '21ad911d5f1719a1d5ce294eec8a1017'
      },
      getCountry: async function(c) {
         const Countries = await fetch(`https://restcountries.com/v3.1/alpha/${c}`, {mode: 'cors'})
         this.countriesJson = await Countries.json();
         this.country = this.countriesJson[0].name.common
         console.log(this.country)
      } ,
      bindEvents: function() {
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.getWeather();
         })
      },
      getWeather: async function() {
         try {
            const GetCoordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.input.value}&limit=1&appid=${this.api_key}`)
            this.cityCoordinates = await GetCoordinates.json();
            console.log(this.cityCoordinates)
            const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=metric&appid=${this.api_key}`)
            this.weather = await cityWeather.json();
            
            console.log(this.weather)
            this.updateDom();
            } catch (err) {
               console.log(err)
            }
         },
         updateDom: function() {
            this.getCountry(this.cityCoordinates[0].country)
            this.cityP.textContent = this.cityCoordinates[0].name + ', ' + this.countriesJson[0].name.common
            console.log()
            this.currentTemp.textContent = 'Current temperature ' + this.weather.main.temp.toFixed(1) + '°C'
            this.feelsLikeTemp.textContent = 'Feels like ' +this.weather.main.feels_like.toFixed(1) + '°C'
            this. pressure.textContent = 'Atmospheric pressure ' + this.weather.main.pressure.toFixed(1)+ ' hPa'
            this.maxTemp.textContent = 'Max temperature ' + this.weather.main.temp_max.toFixed(1) + '°C'
            this.minTemp.textContent = 'Min temperature ' + this.weather.main.temp_min.toFixed(1) + '°C'
         
            this.weatherP.textContent = this.weather.weather[0].main
         }
      }

      weather_app.init();
})()
