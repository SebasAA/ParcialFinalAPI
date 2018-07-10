'use strict'
const express = require("express");
const MaterialCtrl = require('../controllers/materialController');
const auth = require('../middleware');
const api = express.Router();

api.post("/material", auth, MaterialCtrl.insertMaterial);
api.get("/material", auth, MaterialCtrl.getAllMaterials);
api.get("/material/:MaterialId", auth, MaterialCtrl.getMaterial);
api.put("/material/:MaterialId", auth, MaterialCtrl.updateMaterial);
api.delete("/material/:MaterialId", auth, MaterialCtrl.deleteMaterial);

module.exports=api;