
const img = document.querySelector('img')
const btn = document.querySelector('button')
const input = document.getElementById('search')
const p = document.querySelector('p')

async function getCats() {
   try {
   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZXCcQUsoszr878jevQAD71bEYHkMSvwh&s=cats', {mode: 'cors'})

    const catData = await response.json()
      img.src = catData.data.images.original.url;
   } catch (error) {
      p.textContent = error
   }
}
getCats()


 
  btn.addEventListener('click', () => {
   p.textContent = '';
    img.src = ''
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZXCcQUsoszr878jevQAD71bEYHkMSvwh&s=${input.value}`, {mode: 'cors'})
 .then(function(response) {
    return response.json()
 }).then(function(response) {
    img.src = response.data.images.original.url;
    console.log('done')
  }).catch(function(error) {
    p.textContent = error
    
  });
  })