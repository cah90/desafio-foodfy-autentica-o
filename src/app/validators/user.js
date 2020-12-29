const User = require('../models/User')

async function post(req,res,next) {
  //check if it has all fields
  const keys = Object.keys(req.body)
    
  for(key of keys) {
    if (req.body[key] == "") {
      return res.render("admin/users/create", {
        user: req.body,
        error: "Preencha todos os campos, por favor."
      })
    }
  }

  //check if user exists (email)
  const {email} = req.body
  console.log(email)

  const user = await User.findOne(email)

  if (user) {
    return res.render("admin/users/create", {
      user: req.body,
      error: "Usuário já cadastrado."
    })
  }

  next()
}

module.exports = {
  post
}