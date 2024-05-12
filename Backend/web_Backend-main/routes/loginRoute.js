const express = require('express')
const routes = express.Router();
const {logIn, getLoginByUsername,signup} = require('../controllers/login')
routes.route("/login").post(signup)
routes.route("/login:username").post(logIn)

module.exports = routes;