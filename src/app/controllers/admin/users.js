const User = require('../../models/User')

module.exports = {
  createUser(req,res) {
    return res.render("admin/users/create")
  }, 

  async post(req,res) {
    return res.send('passed!')
  }
}