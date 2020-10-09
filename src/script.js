import './styles.scss'

const form = document.querySelector('form');
const images = document.querySelector('.images')
console.log('asdadas');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.search.value

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OD3jwQFDqhiyVNJDY14lvnQDmYngMfqG&s=${query}`, {mode: 'cors'})
  .then(function(response) {
  return response.json();
  })
  .then(function(response) {
    const img = document.createElement('img');
    img.classList.add("image")
    img.src = response.data.images.original.url;
    images.appendChild(img)
  })
  .catch((err) => {
    const p = document.createElement('p');
    p.innerHTML = err.message;
  })

})

