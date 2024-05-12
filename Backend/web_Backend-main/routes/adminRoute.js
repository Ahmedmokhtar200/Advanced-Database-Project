const express = require('express');
const routes = express.Router();
const { addItem, removeItem} = require('../controllers/admin');

// Route for adding items
routes.route("/addItem").post(addItem)
routes.route("/removeItem").post(removeItem)
module.exports = routes;
