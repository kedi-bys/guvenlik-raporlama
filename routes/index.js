const express = require('express')
const router = express.Router()

const category = require('./../models/category.model')
const timeInterval = require('./../models/timeInterval.model')

const dataContainer = require('./../databases/data-container')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render(
    'dashboard',
    {
      title: 'Güvenlik Raporlama Sistemi - Kontrol Paneli',
      page: 'ControlPanel'
    }
  )
})

router.get('/new', async (req, res, next) => {
  let categories = await category.find()
  let timeIntervals = await timeInterval.find()

  res.render(
    'newReport',
    {
      title: 'Güvenlik Raporlama Sistemi - Yeni Rapor',
      categories: categories,
      timeIntervals: timeIntervals,
      page: 'NewReport'
    }
  )
})

router.get('/reports', (req, res, next) => {
  res.render(
    'reports',
    {
      title: 'Güvenlik Raporlama Sistemi - Raporlar',
      page: 'Reports'
    }
  )
})

router.get('/logout', (req, res, next) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  res.render('/dashboard')
})

router.get('/data', (req, res, next) => {
  res.json(dataContainer)
})

module.exports = router
