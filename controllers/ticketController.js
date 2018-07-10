'use strict'

const Ticket = require('../models/ticketModel');

function getTicket(req,res){
    let ticketId = req.params.Id_tickets;
    Ticket.findById(ticketId,(err,tickets)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        if(!tickets) return res.status(500).send({
            message: `No tickets ${err}`
        });
        res.status(200).send(tickets);
    });
}
function updateTicket(req, res){
    let ticketId = req.params.Id_tickets;
    let update = req.body

    Ticket.findByIdAndUpdate(ticketId, update, (err, ticketUp)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({message:"Updated"})
    });
};

function insertTicket(req,res){
    let ticket = Ticket(req.body);

    ticket.save((err,ticketStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        res.status(200).send({ticketStg});
    });
}

module.exports = {
    getTicket,
    udpateTicket,
    insertTicket
}