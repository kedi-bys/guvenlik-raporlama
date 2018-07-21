var express = require('express')
var router = express.Router()
const category = require('./../models/category.model')
const timeInterval = require('./../models/timeInterval.model')
const report = require('./../models/report.model')

router.get('/', async (req, res, next) => {
  let reports = await report.find()
  res.render(
    'reports',
    {
      title: 'Güvenlik Raporlama Sistemi - Raporlar',
      page: 'Reports',
      reports
    }
  )
})

router.post('/', async (req, res, next) => {
  res.render('reports', { title: 'Güvenlik Raporlama Sistemi - Reports' })
})

router.get('/edit', async (req, res, next) => {
  res.render('editReport', { title: 'Güvenlik Raporlama Sistemi - Reports Edit' })
})
router.post('/edit', async (req, res, next) => {
  res.render('editReport', { title: 'Güvenlik Raporlama Sistemi - Reports Edit' })
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
router.post('/new', async (req, res, next) => {
  // Oturum Bilgisi Eklenecek
  let creator = 'Deneme Personeli'
  // -----------------------------
  let data = {
    description: req.body.description,
    summary: req.body.summary,
    solution: req.body.solution,
    location: req.body.location,
    operation: req.body['incorrect-operation'],
    operationdetail: req.body['incorrect-operation-detail'],
    category: req.body.category,
    timeinterval: req.body['time-interval'],
    staff: req.body['occupational-group'],
    date: req.body.date,
    active: true,
    status: 'Oluşturuldu',
    creator: creator,
    paraphedby: null,
    approvedby: null,
    rejectedby: null,
    createdat: Date(),
    paraphedat: null,
    approvedat: null,
    rejectedat: null
  }
  report.insertMany(data).catch((err) => {
    console.log(err)
  })

  res.redirect('/')
})

module.exports = router
