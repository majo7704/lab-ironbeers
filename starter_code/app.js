
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials')


app.get('/', (req, res, next) => {
  res.render('index.hbs');
});

app.get('/beers', (req, res, next ) => {//path to
  punkAPI.getBeers()
  .then((beers) => {
    console.log('beers', beers)
    res.render('beers.hbs', {beers: beers});
  })
  .catch(err => {
    console.log('error' + err)
  })
  
  }
)
app.get('/random-beer', (request, res, next) => {
  punkAPI.getRandom()
  .then((beer) => {
    res.render('randomBeer.hbs', {beer}) //object beer that will render on beer-random page
  })
  .catch(err => {
    console.log('error' + err)
  })
})
app.get("/beers/:id", (req, res, next) => {//dynamic routes, query instead for dynamic routes
  punkAPI.getBeer(req.params.id)
  .then((beer) =>{
    res.render('randomBeer.hbs', {beer})
  })
  .catch(err => {
    console.log('error' + err)
  })
})

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});