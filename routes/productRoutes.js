'use strict'
const express = require("express");
const ProductCtrl = require('../controllers/productController')
const auth = require('../middleware')
const api = express.Router();

//IMAGENES
//paquete Multer
const multer = require('multer');
//storage strategy
const storage = multer.diskStorage({
  destination: function(req, file, cb) { //cb es callback
    cb(null, './uploads/'); // cath de null por posible error, relative path to upload folder
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g,'-') + file.originalname.split(" ").join(""));
    //cb(null, file.filename); // ejemplo de uso de uso del callback
  }
});
//filtros de multer personalizados para la carga de archivos
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//inicializando Multer, pasandole la estrategia de guardado de files
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10MB maximo de uploads
  },
  fileFilter: fileFilter
});
//FIN IMAGENES


api.post("/product", auth, upload.single('productImage'),ProductCtrl.insertNewProduct)
api.get("/product/:id_product", auth, ProductCtrl.getProduct)
api.get("/products", auth, ProductCtrl.getAllProducts)
api.delete("/product/:id_product", auth, ProductCtrl.deleteProduct)
api.put("/product/:id_product", auth, upload.single('productImage'),ProductCtrl.updateProduct)
api.post("/product/:id_product", auth, ProductCtrl.insertMaterial)

module.exports = api;
