'use strict'
const express = require("express");
const TicketCtrl = require('../controllers/ticketController')
const auth = require('../middleware')
const api = express.Router();

api.get("/ticket/:Id_tickets", auth, TicketCtrl.getTicket);
api.put("/ticket/:Id_tickets", auth, TicketCtrl.udpateTicket);
api.post("/ticket", auth, TicketCtrl.insertTicket);

module.exports = api;
