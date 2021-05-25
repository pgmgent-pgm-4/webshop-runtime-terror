import  express from 'express';
let  router = express.Router();

router.get('/', async  function(req, res, next) {
  let  data = {
    layout:  'layout.njk',
    title: 'Nunjucks example'
  }

  res.render('index.njk', data)
})

router.get('/contact', async  function(req, res, next) {
  let  data = {
    layout:  'layout.njk',
    title: 'Nunjucks example2'
  }

  res.render('./contact/contact.njk', data)
})

module.exports = router