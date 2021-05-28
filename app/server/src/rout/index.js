import  express from 'express';
let  router = express.Router();

router.get('/', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Home'
  }

  res.render('index.njk', data)
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

module.exports = router