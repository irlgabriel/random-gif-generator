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
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=OD3jwQFDqhiyVNJDY14lvnQDmYngMfqG&s=${query}`, {mode: 'cors'})
    const gifData = await response.json();
    const img = document.createElement('img');
    img.classList.add("image")
    img.src = gifData.data.images.original.url;
    images.appendChild(img)

    } catch(err) {
    const p = document.createElement('p');
    p.innerHTML = err.message;
    p.classList.add('flash');
    container.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 3000)
  } 
}