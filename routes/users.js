var express = require('express')
var router = express.Router()

router.get('/edit', (req, res, next) => {
  res.render('edituser', { title: 'Güvenlik Raporlama Sistemi - Users' })
})
router.post('/edit', (req, res, next) => {
  res.render('edituser', { title: 'Güvenlik Raporlama Sistemi - Users' })
})

module.exports = router
