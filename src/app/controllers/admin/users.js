const User = require('../../models/User')

module.exports = {
  createUser(req,res) {
    return res.render('admin/users/create')
  }, 

  async post(req,res) {
    const userId = await User.create(req.body)

    return res.redirect('/admin/users')
  },

  async edit(req,res) {
    const userId = req.params.id

    const user = await User.findUserData(userId)

    return res.render('admin/users/edit', {user})
  },

  async update(req,res) {
    const userData = req.body

    userData.is_admin = userData.is_admin || false

    const user = await User.update(userData)

    
  },

  list(req, res) {
    return res.send("Se você chegou aqui é porque deu certo! Parabéns, Cassinhazinha")
  },

  
}