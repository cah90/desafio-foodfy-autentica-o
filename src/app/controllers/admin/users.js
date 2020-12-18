module.exports = {
  async createUser(req,res) {
    return res.render("admin/users/create")
  }, 

  async post(req,res) {
    console.log("I am in users post")
    console.log(req.body)
  }
}