
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
  res.render('index');
});
app.get('/layout', (req, res, next) => {
  res.render('layout');
})
app.get('/beers', (req, res, next ) => {
  punkAPI.getBeers()
  .then((beers) => {
    console.log('beers', beers)
    res.render('beers', {beers});
  })
  .catch(err => {
    console.log('error' + errs)
  })
  
  }
)


app.listen(3000);
