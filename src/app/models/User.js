const db = require("../../config/db")

module.exports = {
  async findOne(email) {
    let query = `
      SELECT * 
      FROM users
      WHERE users.email = $1
    `
    const results = await db.query(query, [email])
    return results.rows[0]
  }
}
