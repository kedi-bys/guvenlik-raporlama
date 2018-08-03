const express = require('express')
const router = express.Router()
const login = require('./../helpers/authentication')

// GET Login
router.get('/login', (req, res, next) => {
  let session = req.session
  let errorMessage = req.session.errorMessage
  if (session.user) {
    res.redirect('/')
    return
  }
  req.session.destroy()
  res.render(
    'login',
    {
      title: 'Güvenlik Raporlama Sistemi - Login',
      next: req.query.next,
      errorMessage: errorMessage
    }
  )
})

router.post('/login', async (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  // Gelen kullanıcı bilgileriyle login olmayı dene.
  const auth = await login(username, password)
  if (auth.status === 'Success') {
    // Login başarılıysa kullanıcı bilgileriyle session oluştur.
    req.session.user = auth.user
    res.redirect(req.body.next || '/')
  } else if (auth.status === 'Failed') {
    // Bir hata meydana gelmişse session'a hata mesajı ekle.
    req.session.errorMessage = auth.errorMessage
    res.redirect('/auth/login')
  }
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
