const User = require('../../models/User')

module.exports = {
  createUser(req,res) {
    return res.render("admin/users/create")
  }, 

  list(req, res) {
    return res.send("Se você chegou aqui é porque deu certo! Parabéns, Cassinhazinha")
  },

  async post(req,res) {
    const userId = await User.create(req.body)

    return res.redirect('/admin/users')
  }
}