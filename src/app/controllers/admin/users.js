const User = require('../../models/User')

module.exports = {
  async list(req, res) {
    const allUsers = await User.getAllUsers()

    return res.render("admin/users/allUsers", {allUsers}) 
  },

  createUser(req,res) {
    return res.render('admin/users/create')
  }, 

  async post(req,res) {
    const user = await User.create(req.body)

    return res.redirect('/admin/users')
  },

  async edit(req,res) {
    const userId = req.params.id

    const user = await User.findUserData(userId)

    if(!user) {
      tp_vars = {
        error: "Esse usuário não existe."
      }
    } else {
      tp_vars = {user}
    }
    
    return res.render('admin/users/edit', tp_vars)
  },

  async update(req,res) {
    const userData = req.body

    userData.is_admin = userData.is_admin || false

    const insertUser = await User.update(userData)
    const updatedUser = await User.findUserData(userData.id)

    return res.render('admin/users/edit', {
      user: updatedUser,
      success: "Os dados foram atualizados com sucesso!"
    })
  },

  async delete(req,res) {
    const userId = req.body.id

    const deleteUser = await User.delete(userId)
    
    return res.redirect("/admin/users")
  }
}