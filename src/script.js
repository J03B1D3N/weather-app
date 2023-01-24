import "./style.scss";
import 'animate.css';





(function () {
   let celcius = true;
   let weather_app = {
      init: function() {
         this.cachingDom();
         this.bindEvents();
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
         let time = date + ' ' + month + ' ' + year
         return {time, hour};
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
      this.wrappers = document.querySelectorAll('.wrapper')
      this.celcius = document.getElementById('celcius')
      this.farenheit = document.getElementById('farenheit')
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
         this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.getWeather();
         })
         this.celcius.addEventListener('click', () => {
            this.farenheit.classList.remove('chosen')
            this.celcius.classList.add('chosen')
            celcius = true;
            
         })
         this.farenheit.addEventListener('click', () => {
            this.celcius.classList.remove('chosen')
            this.farenheit.classList.add('chosen')
            celcius = false;
            
         })

      },
      getWeather: async function() {
         try {
            if(celcius){
            const GetCoordinates = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.input.value}&limit=1&appid=${this.api_key}`)
            this.cityCoordinates = await GetCoordinates.json();
            const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=metric&appid=${this.api_key}`)
            this.weather = await cityWeather.json();
            const getCityFutureWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=metric&appid=${this.api_key}`)
            this.cityFutureWeather = await getCityFutureWeather.json();
            
         
            

            this.getCountry(this.cityCoordinates[0].country)
            } else {
               const GetCoordinates = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.input.value}&limit=1&appid=${this.api_key}`)
               this.cityCoordinates = await GetCoordinates.json();
               const cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=imperial&appid=${this.api_key}`)
               this.weather = await cityWeather.json();
               const getCityFutureWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.cityCoordinates[0].lat}&lon=${this.cityCoordinates[0].lon}&units=imperial&appid=${this.api_key}`)
               this.cityFutureWeather = await getCityFutureWeather.json();
               this.getCountry(this.cityCoordinates[0].country)
               
               
            }
            this.input.value = ''
            } catch (err) {
               console.log(err)
            }
         },
         updateDom: async function() {
           
            while(main.firstChild){
               main.firstChild.remove()
            }
            const futureWeather = this.cityFutureWeather.list

            this.cityP.textContent = `${this.cityCoordinates[0].name}, ${this.country}`

            function createEntries(title, data) {
               const currentWrapper = document.createElement('div')
               currentWrapper.classList.add('wrapper')

               const currentTitle = document.createElement('div')
               currentTitle.classList.add('title')
               currentTitle.textContent = title

               const currentCurrent = document.createElement('div')
               currentCurrent.classList.add('current')
               currentCurrent.textContent = data

               currentWrapper.appendChild(currentTitle)
               currentWrapper.appendChild(currentCurrent)

               main.appendChild(currentWrapper)
            }
            if(celcius){
               const data1 = this.weather.main.temp.toFixed(1) + '°C'
               const data2 = this.weather.main.feels_like.toFixed(1) + '°C'
               const data3 = this.weather.main.pressure.toFixed(1)+ ' hPa'
               const data4 = this.weather.main.humidity.toFixed(1) + '%'
               const data5 = this.weather.weather[0].main
               createEntries('Current Weather', data5)
               createEntries('Current temperature', data1)
               createEntries('Feels like', data2)
               createEntries('Pressure', data3)
               createEntries('Humidity', data4)
            } else {
               const data1 = this.weather.main.temp.toFixed(1) + '°F'
               const data2 = this.weather.main.feels_like.toFixed(1) + '°F'
               const data3 = this.weather.main.pressure.toFixed(1)+ ' hPa'
               const data4 = this.weather.main.humidity.toFixed(1) + '%'
               const data5 = this.weather.weather[0].main
               createEntries('Current Weather', data5)
               createEntries('Current temperature', data1)
               createEntries('Feels like', data2)
               createEntries('Pressure', data3)
               createEntries('Humidity', data4)
            }
            
            
            
            const futureWeatherDOM = document.createElement('div')
            futureWeatherDOM.classList.add('futureWeather')
            futureWeatherDOM.setAttribute('id','futureWeatherDOM')
            main.appendChild(futureWeatherDOM)

            for(let i = 0; i < futureWeather.length; i++) {
               
               const wrapper = document.createElement('div')
               wrapper.classList.add('wrapperFuture')
               wrapper.style.display = 'block'
               const title = document.createElement('div')
               title.classList.add('title')
               const p = document.createElement('p')
               const current = document.createElement('div')
               current.classList.add('current')
               const date2 = this.date(futureWeather[i].dt)
               title.textContent = date2.time
               p.textContent = date2.hour + 'h UTC'
               if(celcius){
                  current.textContent = futureWeather[i].main.temp.toFixed(1) + '°C'
               } else {
                  current.textContent = futureWeather[i].main.temp.toFixed(1) + '°F'

               }
               title.appendChild(p)
               wrapper.appendChild(title)
               wrapper.appendChild(current)
               futureWeatherDOM.appendChild(wrapper)

            }
         }
      }

      weather_app.init();
})()
