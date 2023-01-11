import "./style.scss";



(function () {
   let weather_app = {
      init: function() {
         this.cachingDom();
         this.bindEvents();
         this.date();
      },
      date: function timeConverter(UNIX_timestamp){
         let a = new Date(UNIX_timestamp * 1000);
         let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
         let year = a.getUTCFullYear();
         let month = months[a.getUTCMonth()];
         let date = a.getUTCDate();
         let hour = a.getUTCHours();
         let min = a.getUTCMinutes();
         let sec = a.getUTCSeconds();
         let time = hour + ':' + min + ':' + sec ;
         return time;
       },
       
      cachingDom: function() {

      this.btn = document.querySelector('button')
      this.input = document.getElementById('search')
      this.cityP = document.getElementById('city')
      this.currentTemp = document.getElementById('currentTemp')
      this.feelsLikeTemp = document.getElementById('feelsLikeTemp')
      this.pressure = document.getElementById('pressure')
      this.humidity = document.getElementById('humidity')
      this.currentWeather = document.getElementById('weather')
      this.body = document.querySelector('body')
      this.form = document.getElementById('form')
      this.api_key = '21ad911d5f1719a1d5ce294eec8a1017'
      },
      getCountry: async function(c) {
         try {
         const Countries = await fetch(`https://restcountries.com/v3.1/alpha/${c}`, {mode: 'cors'})
         this.countriesJson = await Countries.json();
         this.country = this.countriesJson[0].name.common
         this.updateDom();
         } catch(err) {
            console.log(err)
         }
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
            const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=metric&appid=${this.api_key}`)
            this.weather = await cityWeather.json();
            const getCityFutureWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=metric&appid=${this.api_key}`)
            this.cityFutureWeather = await getCityFutureWeather.json();
            console.log(this.cityFutureWeather.list)

            this.getCountry(this.cityCoordinates[0].country)
            
            this.input.value = ''
            } catch (err) {
               console.log(err)
            }
         },
         updateDom: async function() {
            const futureWeather = this.cityFutureWeather.list.filter(entry => this.date(entry.dt).includes('0:0:0'))
            for(let i = 0; i < futureWeather.length; i++) {
               const wrapper = document.createElement('div')
               wrapper.classList.add('wrapper')
               const title = document.createElement('div')
               title.classList.add('title')
               const current = document.createElement('div')
               current.classList.add('current')

               const date2 = futureWeather[i].dt_txt.split(' ')
               title.textContent = futureWeather[i].dt_txt

               current.textContent = futureWeather[i].main.temp.toFixed(1) + '°C'

               wrapper.appendChild(title)
               wrapper.appendChild(current)
               main.appendChild(wrapper)

            }
            console.log(futureWeather)
            this.cityP.textContent = `${this.cityCoordinates[0].name}, ${this.country}`
            console.log()
            this.currentTemp.textContent = this.weather.main.temp.toFixed(1) + '°C'
            this.feelsLikeTemp.textContent = this.weather.main.feels_like.toFixed(1) + '°C'
            this. pressure.textContent = this.weather.main.pressure.toFixed(1)+ ' hPa'
            this.humidity.textContent = this.weather.main.humidity.toFixed(1) + '%'
            this.currentWeather.textContent = this.weather.weather[0].main
         }
      }

      weather_app.init();
})()
