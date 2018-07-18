var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Login' })
})
router.get('/logout', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Login' })
})
router.get('/impersonate', (req, res, next) => {
  res.render('impersonate', { title: 'Güvenlik Raporlama Sistemi - Impersonate' })
})
module.exports = router
