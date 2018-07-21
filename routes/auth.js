var express = require('express')
var router = express.Router()

// GET Login
router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Login' })
})
router.post('/login', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Login' })
})
router.get('/logout', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Logout' })
})
router.post('/logout', (req, res, next) => {
  res.render('login', { title: 'Güvenlik Raporlama Sistemi - Logout' })
})
router.get('/impersonate', (req, res, next) => {
  res.render('impersonate', { title: 'Güvenlik Raporlama Sistemi - Impersonate' })
})
router.post('/impersonate', (req, res, next) => {
  res.render('impersonate', { title: 'Güvenlik Raporlama Sistemi - Impersonate' })
})
module.exports = router
