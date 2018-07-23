const createError = require('http-errors')
var express = require('express')
var router = express.Router()
const category = require('./../models/category.model')
const timeInterval = require('./../models/timeInterval.model')
const report = require('./../models/report.model')

router.use((req, res, next) => {
  if (!req.session.user) {
    res.redirect('/auth/login?next=' + req.originalUrl)
  } else {
    next()
  }
})

router.get('/', async (req, res, next) => {
  let reports = await report.find()
  res.render(
    'reports',
    {
      title: 'Güvenlik Raporlama Sistemi - Raporlar',
      page: 'Reports',
      reports,
      user: req.session.user
    }
  )
})

router.post('/', async (req, res, next) => {
  res.render('reports', { title: 'Güvenlik Raporlama Sistemi - Reports' })
})

router.get('/edit/:id', async (req, res, next) => {
  let _report = null
  try {
    _report = await report.findById(req.params.id)
  } catch (e) { next(createError(404)) }

  const categories = await category.find()
  const timeIntervals = await timeInterval.find()
  console.log(_report)
  res.render('editReport', {
    title: 'Güvenlik Raporlama Sistemi - Reports Edit',
    report: _report,
    categories: categories,
    timeIntervals: timeIntervals,
    user: req.session.user
  })
})
router.post('/edit', async (req, res, next) => {
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
    date: req.body.date
  }

  report.update({ _id: req.body['id'] }, { $set: data }, (err, success) => {
    if (err) {
      console.error(err)
    }
  }
  )
  res.redirect('/reports')
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
      page: 'NewReport',
      user: req.session.user
    }
  )
})

router.post('/new', async (req, res, next) => {
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
    creator: req.session.user.displayName,
    creatorId: req.session.user.username,
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
