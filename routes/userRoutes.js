'use strict'
const express = require("express");
const UserController = require('../controllers/userController')
const auth = require('../middleware')
const api = express.Router();

api.post('/user', UserController.createUser)
api.get('/user/detail', auth, UserController.getSelfUser)
api.put('/user', auth, UserController.updateUser)

module.exports = api