'use strict'

const express = require("express");
const authCtrl = require('../controllers/authController')
const api = express.Router();

api.post('/login', authCtrl.signIn);

module.exports=api;