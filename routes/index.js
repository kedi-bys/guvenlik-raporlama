const express = require('express')
const router = express.Router()

const dataContainer = require('./../databases/data-container')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('dashboard', { title: 'Güvenlik Raporlama Sistemi - Kontrol Paneli' })
})

router.get('/new', (req, res, next) => {
  res.render(
    'newReport',
    {
      title: 'Güvenlik Raporlama Sistemi - Yeni Rapor',
      data: dataContainer
    }
  )
})

router.get('/reports', (req, res, next) => {
  res.render('reports')
})

router.get('/logout', (req, res, next) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  res.render('/dashboard')
})

module.exports = router
