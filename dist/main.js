/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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
const bcAttribute = '<a href="https://www.freepik.com/free-vector/rural-landscape-with-agriculture-fields-night_23094442.htm#query=field%20at%20night&position=4&from_view=search&track=ais">Image by upklyak</a> on Freepik'
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw4RkFBOEYsUUFBUTs7QUFFdEc7QUFDQTtBQUNBLHFGQUFxRixZQUFZLGlCQUFpQixRQUFRO0FBQzFIO0FBQ0E7QUFDQSwwRkFBMEYsWUFBWSxPQUFPLFlBQVksc0JBQXNCLFFBQVE7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGVzc29uLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJylcbmNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJylcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJylcbmNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNMaWtlVGVtcCcpXG5jb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzc3VyZScpXG5jb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heFRlbXAnKVxuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5UZW1wJylcbmNvbnN0IHdlYXRoZXJQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgYmNBdHRyaWJ1dGUgPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3J1cmFsLWxhbmRzY2FwZS13aXRoLWFncmljdWx0dXJlLWZpZWxkcy1uaWdodF8yMzA5NDQ0Mi5odG0jcXVlcnk9ZmllbGQlMjBhdCUyMG5pZ2h0JnBvc2l0aW9uPTQmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1haXNcIj5JbWFnZSBieSB1cGtseWFrPC9hPiBvbiBGcmVlcGlrJ1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcblxuXG5jb25zdCBhcGlfa2V5ID0gJzIxYWQ5MTFkNWYxNzE5YTFkNWNlMjk0ZWVjOGExMDE3J1xuY29uc3QgY29vcmRpbmF0ZXNfYXBpID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9TG9uZG9uJmxpbWl0PTUmYXBwaWQ9e0FQSSBrZXl9J1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgdHJ5IHtcbiAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtpbnB1dC52YWx1ZX0mbGltaXQ9MSZhcHBpZD0ke2FwaV9rZXl9YClcbiAgIGNvbnN0IGNpdHkgPSBhd2FpdCBjb29yZGluYXRlcy5qc29uKCk7XG4gICBjb25zb2xlLmxvZyhjaXR5KVxuICAgY29uc3Qgd2VhdGhlckpzb24gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Y2l0eVswXS5sYXR9Jmxvbj0ke2NpdHlbMF0ubG9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHthcGlfa2V5fWApXG4gICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckpzb24uanNvbigpO1xuICAgXG4gICBwLnRleHRDb250ZW50ID0gY2l0eVswXS5uYW1lXG4gICBjb25zb2xlLmxvZyh3ZWF0aGVyKVxuICAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAnQ3VycmVudCB0ZW1wZXJhdHVyZSAnICsgd2VhdGhlci5tYWluLnRlbXAudG9GaXhlZCgxKSArICfCsEMnXG4gICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gJ0ZlZWxzIGxpa2UgJyArd2VhdGhlci5tYWluLmZlZWxzX2xpa2UudG9GaXhlZCgxKSArICfCsEMnXG4gICBwcmVzc3VyZS50ZXh0Q29udGVudCA9ICdBdG1vc3BoZXJpYyBwcmVzc3VyZSAnICsgd2VhdGhlci5tYWluLnByZXNzdXJlLnRvRml4ZWQoMSkrICcgaFBhJ1xuICAgbWF4VGVtcC50ZXh0Q29udGVudCA9ICdNYXggdGVtcGVyYXR1cmUgJyArIHdlYXRoZXIubWFpbi50ZW1wX21heC50b0ZpeGVkKDEpICsgJ8KwQydcbiAgIG1pblRlbXAudGV4dENvbnRlbnQgPSAnTWluIHRlbXBlcmF0dXJlICcgKyB3ZWF0aGVyLm1haW4udGVtcF9taW4udG9GaXhlZCgxKSArICfCsEMnXG5cbiAgIHdlYXRoZXJQLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyWzBdLm1haW5cbiAgIFxuXG5cblxuICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICB9XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIGdldFdlYXRoZXIoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9