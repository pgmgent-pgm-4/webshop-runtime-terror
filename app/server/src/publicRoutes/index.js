import  express from 'express';
let  router = express.Router();
import fetch from 'node-fetch';

router.get('/', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Home'
  }

  res.render('index.njk', data)
})


router.get('/men', async  function(req, res, next) {
  const response = await fetch('http://localhost:8080/api/productsCategory/1');
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'men',
    watches,
  }

  res.render('./products/men.njk', data)
})

router.get('/women', async  function(req, res, next) {
  const response = await fetch('http://localhost:8080/api/productsCategory/2');
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'women',
    watches,
  }

  res.render('./products/women.njk', data)
})

router.get('/watch-storages', async  function(req, res, next) {
  const response = await fetch('http://localhost:8080/api/productsCategory/3');
  const storages = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'watch storages',
    storages,
  }

  res.render('./products/storages.njk', data)
})


router.get('/bands', async  function(req, res, next) {
  const response = await fetch('http://localhost:8080/api/productsCategory/4');
  const bands = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'bands',
    bands,
  }

  res.render('./products/bands.njk', data)
})


router.get('/contact', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Contact'
  }

  res.render('./contact/contact.njk', data)
})

router.get('/about', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'About'
  }

  res.render('./about/about.njk', data)
})

router.get('/registration', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Registration'
  }

  res.render('./registration/registration.njk', data)
})


router.get('/login', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Login'
  }

  res.render('./login/login.njk', data)
})

module.exports = router