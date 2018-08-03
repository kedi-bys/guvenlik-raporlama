const ActiveDirectory = require('activedirectory')
const config = require('./../config')
const users = require('./../models/users.model')

const login = async (username, password) => {
  let cfg = config.activeDirectoryConfig
  let ad = new ActiveDirectory(cfg)
  let adUser = null
  let authenticated = false

  // Verilen kullanıcı adı ve şifreyle activedirectory'de giriş yapmayı dene.
  try {
    authenticated = await (new Promise((resolve, reject) => {
      ad.authenticate(username + cfg.dc, password, (err, auth) => {
        if (err) reject(err)
        else resolve(auth)
      })
    }))
  } catch (ex) {
    return {
      status: 'Failed',
      errorMessage: `Giriş yapılamadı. Kullanıcı bilgilerini kontrol edin.`,
      errorDetail: ex
    }
  }

  if (!authenticated) {
    return {
      status: 'Failed',
      errorMessage: `Giriş yapılamadı. Kullanıcı bilgilerini kontrol edin.`
    }
  }

  // Kullanıcı bilgilerini çekmek için config'e sorgu atacak kullanıcı bilgisi
  // eklendi.
  cfg.username = username + cfg.dc
  cfg.password = password
  ad = new ActiveDirectory(cfg)

  try {
    adUser = await (new Promise((resolve, reject) => {
      ad.findUser(username, (err, user) => {
        if (err) reject(err)
        else resolve(user)
      })
    }))
  } catch (ex) {
    return {
      status: 'Failed',
      errorMessage: `Active Directory'den kullanıcı bilgilerini çekerken bir 
      hata oluştu.`,
      errorDetail: ex
    }
  }

  if (!adUser) {
    return {
      status: 'Failed',
      errorMessage: 'Kullanıcı bilgileri çekilemedi.'
    }
  }

  // Kullanıcının veri tabanı kontrollerini yap.
  const userCheckInfo = await checkUser(adUser)
  if (userCheckInfo.status === 'Failed') {
    return userCheckInfo
  }

  return {
    status: 'Success',
    user: {
      username: adUser.sAMAccountName,
      mail: adUser.mail,
      displayName: adUser.displayName,
      name: adUser.givenName,
      surname: adUser.sn
    }
  }
}

const checkUser = async (user) => {
  // Kullanıcının veri tabanında kaydı olup olmadığını kontrol et.
  let userRecord = await users.findOne({ 'username': user.sAMAccountName })
  if (!userRecord) {
    // Yoksa yeni oluştur.
    let newUser = createUserJson(user)
    try {
      await users.insertMany(newUser)
    } catch (ex) {
      return {
        status: 'Failed',
        errorMessage: 'Veritabanında kullanıcı oluştururken bir hata oluştu.',
        errorDetail: ex
      }
    }
  } else {
    if (!userRecord.active) {
      let errorMessage = `Sayın ${user.displayName}, hesabınızın 
      aktifleştirilmesi için Bilgi İşlem ile irtibata geçiniz.`
      return {
        status: 'Failed',
        errorMessage
      }
    }

    // Kullanıcı kaydı varsa son giriş tarihini güncelle.
    try {
      await users.update(
        { _id: userRecord._id },
        {
          $set: {
            prevlogin: userRecord.lastlogin,
            lastlogin: Date()
          }
        }
      )
    } catch (ex) {
      return {
        status: 'Failed',
        errorMessage: 'Veritabanında kullanıcı güncellenirken bir hata oluştu.',
        errorDetail: ex
      }
    }
  }
  return {
    status: 'Success',
    message: 'Veritabanı bilgileri kontrolü tamamlandı.'
  }
}

const createUserJson = user => {
  // Active Directory'den gelen group bilgisini anlaşılır hale getir.
  let group = user.dn.split(',')
    .filter(g => g.indexOf('OU') !== -1)
  group = group[0] !== undefined ? group[0].replace('OU=', '') : null

  return {
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
    prevlogin: null,
    active: false
  }
}

module.exports = login
