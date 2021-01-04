const db = require("../../config/db")
const generatePassword = require("password-generator")
const {hash} = require("bcryptjs")

module.exports = {
  async findOne(email) {
    let query = `
      SELECT * 
      FROM users
      WHERE users.email = $1
    `
    const results = await db.query(query, [email])
    return results.rows[0]
  }, 

  async create(data) {
    const query = `
      INSERT INTO users (
        name,
        email,
        password
      ) VALUES ($1, $2, $3)
      RETURNING id
    `
    //CREATE A PASSWORD
     const password = generatePassword(8,false) //create in another module utils

    //HASH OF PASSWORD
    const passwordHash = await hash(password, 8)

    const values = [
      data.name,
      data.email,
      passwordHash
    ]

    let results

    try {
      results = await db.query(query, values)
    } catch(err) {
      console.log("This is an errror when inserting users.")
      console.error(err)
    }
    
    //SEND THE PASSWORD TO THE USER


    if(results) {
      return results.rows[0].id
    }
  }
}

