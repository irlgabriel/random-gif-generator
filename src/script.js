import './styles.scss'

const form = document.querySelector('form');
const images = document.querySelector('.images')
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = e.target.search.value;
  getGif(query);
})

async function getGif(query) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OD3jwQFDqhiyVNJDY14lvnQDmYngMfqG&s=${query}`, {mode: 'cors'})
  response.json().then(function(response) {
    const img = document.createElement('img');
    img.classList.add("image")
    img.src = response.data.images.original.url;

    images.appendChild(img)
  })
  .catch((err) => {
    const p = document.createElement('p');
    p.innerHTML = err.message;
    p.classList.add('flash');
    p.style.position = "relative";
    
    container.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 3000)
  })
}