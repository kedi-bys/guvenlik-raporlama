const express = require('express')
const router = express.Router()
const ActiveDirectory = require('activedirectory')
const activeDirectoryConfig = require('./../config').activeDirectoryConfig

// GET Login
router.get('/login', (req, res, next) => {
  let session = req.session

  if (session.user) {
    res.redirect('/')
  }

  res.render(
    'login',
    {
      title: 'Güvenlik Raporlama Sistemi - Login',
      next: req.query.next
    }
  )
})

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  console.log(username, password)

  let adConfig = activeDirectoryConfig
  const ad = new ActiveDirectory(adConfig)

  ad.authenticate(username + activeDirectoryConfig.dc, password, (err, auth) => {
    if (err) console.log(err)
    if (auth) {
      adConfig.username = username + activeDirectoryConfig.dc
      adConfig.password = password

      new ActiveDirectory(adConfig)
        .findUser(username, (err, user) => {
          if (err) console.log(err)
          if (!user) {
            res.send({ status: 'Kullanıcı bilgileri bulunamadı.' })
          } else {
            req.session.user = {
              username: user.sAMAccountName,
              mail: user.mail,
              displayName: user.displayName,
              name: user.givenName,
              surname: user.sn
            }
            console.log(req.body.next)
            res.redirect(req.body.next || '/')
          }
        })
    } else {
      res.send({ status: 'Failed' })
    }
  })
})

router.get('/logout', (req, res, next) => {
  req.session.destroy((err) => { if (err) console.log(err) })
  res.redirect('/auth/login')
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
