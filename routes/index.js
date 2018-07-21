const express = require('express')
const router = express.Router()

// const category = require('./../models/category.model')
// const timeInterval = require('./../models/timeInterval.model')
// const report = require('./../models/report.model')

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

// router.get('/reports/new', async (req, res, next) => {
//   let categories = await category.find()
//   let timeIntervals = await timeInterval.find()

//   res.render(
//     'newReport',
//     {
//       title: 'Güvenlik Raporlama Sistemi - Yeni Rapor',
//       categories: categories,
//       timeIntervals: timeIntervals,
//       page: 'NewReport'
//     }
//   )
// })

// router.get('/reports', async (req, res, next) => {
//   let reports = await report.find()
//   res.render(
//     'reports',
//     {
//       title: 'Güvenlik Raporlama Sistemi - Raporlar',
//       page: 'Reports',
//       reports
//     }
//   )
// })

router.get('/logout', (req, res, next) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  res.render('/dashboard')
})

module.exports = router
