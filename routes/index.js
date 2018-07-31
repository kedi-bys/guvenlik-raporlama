const express = require('express')
const router = express.Router()
const report = require('./../models/report.model')

router.get('/', async (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/auth/login?next=' + req.originalUrl)
  } else {
    const username = req.session.user.username

    const userReports = await report.find({ creatorId: username })
    const createdReports = await report.find({ status: { $in: ['Oluşturuldu', 'Paraflandı'] }, creatorId: username }).count()
    const rejectedReports = await report.find({ creatorId: username, status: 'İptal edildi' }).count()
    const approvedReports = await report.find({ creatorId: username, status: 'Onaylandı' }).count()

    res.render(
      'dashboard',
      {
        title: 'Güvenlik Raporlama Sistemi - Kontrol Paneli',
        page: 'ControlPanel',
        user: req.session.user,
        userReports,
        createdReports,
        rejectedReports,
        approvedReports
      }
    )
  }
})

module.exports = router
