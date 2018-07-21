const express = require('express')
const router = express.Router()
const ActiveDirectory = require('activedirectory')

const config = {
  url: 'ldap://npi.local',
  baseDN: 'dc=npi,dc=local'
}

// const category = require('./../models/category.model')
// const timeInterval = require('./../models/timeInterval.model')
// const report = require('./../models/report.model')

const ad = new ActiveDirectory(config)

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

router.get('/login', (req, res, next) => {
  res.render('login')
})

router.post('/login', async (req, res, next) => {
  const dc = '@npi.local'
  const username = req.body.username
  const password = req.body.password

  ad.authenticate(username + dc, password, (err, auth) => {
    if (err) console.log(err)
    if (auth) {
      const userConfig = {
        url: config.url,
        baseDN: config.baseDN,
        username: username + dc,
        password: password
      }
      new ActiveDirectory(userConfig)
        .findUser(username, (err, user) => {
          if (err) console.log(err)
          if (!user) {
            res.send({ status: 'Kullanıcı bilgileri alınamadı.' })
          } else {
            res.send(user)
          }
        })
    } else {
      res.send({ status: 'Failed' })
    }
  })
})

module.exports = router
