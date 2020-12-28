const User = require('../models/User')

async function post(req,res,next) {
  //check if it has all fields
  const keys = Object.keys(req.body)
    
  for(key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all the fields.")
    }
  }

  //check if user exists (email)
  const {email} = req.body
  console.log(email)

  const user = await User.findOne(email)

  if (user) {
    return res.send("This user already exists!")
  }

  next()
}

module.exports = {
  post
}