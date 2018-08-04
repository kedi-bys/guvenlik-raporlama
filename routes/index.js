const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.redirect('/reports/dashboard')
})

module.exports = router
