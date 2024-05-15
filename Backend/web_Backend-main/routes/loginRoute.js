const express = require('express')
const routes = express.Router();
const {logIn, getLoginByUsername,signup,getAllLogin} = require('../controllers/login')
routes.route("/login").post(signup).get(getAllLogin)
routes.route("/login:username").post(logIn)

module.exports = routes;