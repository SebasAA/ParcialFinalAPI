'use strict'
const express = require("express");
const TicketCtrl = require('../controllers/ticketController')
const auth = require('../middleware')
const api = express.Router();

api.get("/ticket/:id_tickets", auth, TicketCtrl.getTicket);
api.put("/ticket/:id_tickets", auth, TicketCtrl.updateTicket);
api.post("/ticket", auth, TicketCtrl.insertTicket);
api.post("/ticket/:id_ticket", auth, TicketCtrl.insertProduct);

module.exports = api;
