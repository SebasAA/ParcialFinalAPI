'use strict'
const express = require("express");
const ProductCtrl = require('../controllers/productController')
const auth = require('../middlewares')
const api = express.Router();

api.post("/product", ProductCtrl.insertNewProduct)

module.exports = api;