const express = require('express')
const routes = express.Router()
const chefs = require('./app/controllers/admin/chefs.js')
const recipes = require('./app/controllers/admin/recipes.js')
const users = require('./app/controllers/admin/users.js')
const main = require('./app/controllers/main.js')
const Validator = require('./app/validators/user.js')
const multer = require('./app/middlewares/multer')

module.exports = routes

routes.get("/", main.index) 
routes.get("/about", main.about)
routes.get("/chefs", main.chefs)
routes.get("/recipes", main.recipes)
routes.get("/recipes/:id", main.recipe)
routes.get("/results", main.results)   

//ADMINISTRATIVE AREA
//RECIPES
routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.post("/admin/recipes", multer.array("photos", 5), recipes.post)
routes.put("/admin/recipes", multer.array("photos", 5), recipes.put)
routes.delete("/admin/recipes", recipes.delete)

//CHEFS
routes.get("/admin/chefs", chefs.index)
routes.get("/admin/chefs/create", chefs.create)
routes.get("/admin/chefs/:id", chefs.show)
routes.get("/admin/chefs/:id/edit", chefs.edit)
routes.post("/admin/chefs", multer.array("avatar", 1),chefs.post)
routes.put("/admin/chefs",multer.array("avatar", 1), chefs.put)
routes.delete("/admin/chefs", chefs.delete)

//USERS
//LOGIN / LOGOUT
//routes.get("/users/login", session.loginForm)
//routes.post("/users/login", session.login)
//routes.post("/users/logout", session.logout)

//RESET PASSWORD / FORGOT
// routes.get("/users/forgot-password", session.forgotForm)
// routes.get("/users/password-reset", session.resetForm)
// routes.post("/users/forgot-password", session.forgot)
// routes.post("/users/password-reset", session.reset)

//LOGGED USER
//routes.get("admin/profile", userProfile.index)
//routes.put("admin/profile", userProfile.put)

//ADMIN-USER
routes.get("/admin/users", users.list)
routes.get("/admin/users/create", users.createUser)
routes.post("/admin/users", Validator.post, users.post)
routes.get("/admin/users/:id/edit", users.edit)
routes.put("/admin/users", users.update)
routes.get("/admin/users/:id/delete", users.delete)
routes.delete("/admin/users", users.delete)
 