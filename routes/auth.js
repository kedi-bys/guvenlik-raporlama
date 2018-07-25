const express = require('express')
const router = express.Router()
const ActiveDirectory = require('activedirectory')
const activeDirectoryConfig = require('./../config').activeDirectoryConfig
const users = require('./../models/users.model')

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

  let adConfig = activeDirectoryConfig
  const ad = new ActiveDirectory(adConfig)

  ad.authenticate(username + activeDirectoryConfig.dc, password, (err, auth) => {
    if (err) console.log(err)
    if (auth) {
      adConfig.username = username + activeDirectoryConfig.dc
      adConfig.password = password

      new ActiveDirectory(adConfig)
        .findUser(username, async (err, user) => {
          if (err) console.log(err)
          if (!user) {
            res.send({ status: 'Kullanıcı bilgileri bulunamadı.' })
          } else {
            // kullanıcı AD içinde bulunursa session oluşturur
            req.session.user = {
              username: user.sAMAccountName,
              mail: user.mail,
              displayName: user.displayName,
              name: user.givenName,
              surname: user.sn
            }
            // kullanıcı veri tabanından kontrol edilir
            let _user = null
            try {
              _user = await users.findOne({ 'username': user.sAMAccountName })
              // kullanıcı veri tabanında bulunmuyorsa yenisini oluşturur
              if (_user === null) {
                let group = user.dn.split(',')
                  .filter(g => g.indexOf('OU') !== -1)
                group = group[0] !== undefined ? group[0].replace('OU=', '') : null
                let data = {
                  displayname: user.displayName,
                  username: user.sAMAccountName,
                  mail: user.mail,
                  group: group,
                  role: {
                    name: 'Kullanıcı',
                    privilege: 1
                  },
                  firstlogin: Date(),
                  lastlogin: Date(),
                  prevlogin: null
                }
                users.insertMany(data).catch((err) => {
                  console.log(err)
                })
              } else {
                // kulanıcı varsa son giriş tarihi düzenlenir
                users.update({ _id: _user._id }, {$set: {prevlogin: _user.lastlogin, lastlogin: Date()}}, (err, success) => {
                  if (err) {
                    console.error(err)
                  }
                })
              }
            } catch (error) {
              console.log(error)
            }

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
