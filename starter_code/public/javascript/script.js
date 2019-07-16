let randomButton = document.getElementsByClassName('btn-random')[0]
randomButton.addEventListener('click', function () {
  const PunkAPIWrapper = require('punkapi-javascript-wrapper');
  const punkAPI = new PunkAPIWrapper();

  var randomBeer = punkAPI[Math.floor(Math.random() * punkAPI.length)];
  
  blockquote.innerHTML = randomBeer;
})

let checkBeerButton = document.getElementsByClassName('btn-all')[0]
checkBeerButton.addEventListener('click', function (){
  let beerCards = document.getElementsByClassName('beer-cards')
    for (let i = 0; i < beerCards.length; i ++){
      let paragraph = document.createElement('p');
      let header3 = document.createElement('h3');
      let header2 = document.createElement('h2');
      let img = document.createElement('img');
      img.setAttribute = src;
      let div = document.createElement('div');
      div.className = 'beer-cards'
      div.appendChild.paragraph;
      div.appendChild.header3;
      div.appendChild.header2;
      div.appendChild.img;
    }
  });
