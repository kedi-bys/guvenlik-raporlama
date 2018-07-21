var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Güvenlik Raporlama Sistemi - Users' })
})
router.post('/', (req, res, next) => {
  res.render('index', { title: 'Güvenlik Raporlama Sistemi - Users' })
})

module.exports = router
