'use strict'
const express = require("express");
const ProductCtrl = require('../controllers/productController')
const auth = require('../middleware')
const api = express.Router();

api.post("/product", auth, ProductCtrl.insertNewProduct)
api.get("/product/:id_product", auth, ProductCtrl.getProduct)
api.get("/products", auth, ProductCtrl.getAllProducts)
api.delete("/product/:id_product", auth, ProductCtrl.deleteProduct)
api.put("/product/:id_product", auth, ProductCtrl.updateProduct)
api.post("/product/:id_product", auth, ProductCtrl.insertMaterial)

module.exports = api;