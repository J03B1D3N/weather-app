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
      bindEvents: function() {
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.getWeather();
         })
      },
      getWeather: async function() {
         try {
            const coordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.input.value}&limit=1&appid=${this.api_key}`)
            const city = await coordinates.json();
            console.log(this.city)
            const weatherJson = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&units=metric&appid=${this.api_key}`)
            const weather = await weatherJson.json();
            
            this.cityP.textContent = city[0].name
            console.log(this.weather)
            this.currentTemp.textContent = 'Current temperature ' + weather.main.temp.toFixed(1) + '°C'
            this.feelsLikeTemp.textContent = 'Feels like ' +weather.main.feels_like.toFixed(1) + '°C'
            this. pressure.textContent = 'Atmospheric pressure ' + weather.main.pressure.toFixed(1)+ ' hPa'
            this.maxTemp.textContent = 'Max temperature ' + weather.main.temp_max.toFixed(1) + '°C'
            this.minTemp.textContent = 'Min temperature ' + weather.main.temp_min.toFixed(1) + '°C'
         
            this.weatherP.textContent = weather.weather[0].main
            
         
         
         
            } catch (err) {
               console.log(err)
            }
         }
      }

      weather_app.init();
})()
