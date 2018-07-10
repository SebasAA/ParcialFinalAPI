'use strict'
const express = require("express");
const MaterialCtrl = require('../controllers/materialController');
const auth = require('../middleware');
const api = express.Router();

api.post("/material", auth, MaterialCtrl.insertMaterial);
api.get("/material", auth, MaterialCtrl.getMaterial);
api.put("/material", auth, MaterialCtrl.updateMaterial);
api.delete("/material", auth, MaterialCtrl.deleteMaterial);

module.exports=api;