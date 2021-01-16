const User = require('../models/User')
const { compare } = require('bcryptjs')

async function login(req,res,next) {

  console.log('req.body', req.body)
  const { email, password } = req.body

  const user = await User.findOne(email)

  if (!user) {

    return res.render("admin/session/index", {
      inputClass: "red-border",
      user: req.body,
      error: "Usuário não cadastrado."
    })
  }

  const passed = await compare(password, user.password)

  if(!passed) {
    return res.render("admin/session/index", {
      inputClass: "red-border",
      user: req.body,
      error: "Senha incorreta."
    })
  }

    req.user = user

    next()
}
 

module.exports = {
  login
}