var express = require('express')
var router = express.Router()

router.get('/edit', (req, res, next) => {
  res.render('editReport', { title: 'Güvenlik Raporlama Sistemi - Reports Edit' })
})
router.post('/edit', (req, res, next) => {
  res.render('editReport', { title: 'Güvenlik Raporlama Sistemi - Reports Edit' })
})
router.get('/new', (req, res, next) => {
  res.render('newReport', { title: 'Güvenlik Raporlama Sistemi - Reports New' })
})
router.post('/new', (req, res, next) => {
  res.render('newReport', { title: 'Güvenlik Raporlama Sistemi - Reports New' })
})

module.exports = router
