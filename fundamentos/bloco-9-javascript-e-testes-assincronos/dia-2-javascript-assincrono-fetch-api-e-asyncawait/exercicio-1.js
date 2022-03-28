// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const jokeText = document.getElementById('jokeContainer')

function returnJoke(joke) {
  jokeText.innerText = joke
}

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => returnJoke(data.joke));    
};

window.onload = () => fetchJoke();