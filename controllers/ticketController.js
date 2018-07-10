'use strict'

const Ticket = require('../models/ticketModel');

function getTicket(req,res){

    let ticketId = req.params.id_tickets;
    
    Ticket.findById(ticketId,(err,ticket)=>{
        
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        if(!ticket) return res.status(404).send({
            message: `No tickets`
        });

        res.status(200).send(ticket);
    });
}

function updateTicket(req, res){
    let ticketId = req.params.id_tickets;
    let update = req.body

    Ticket.findByIdAndUpdate(ticketId, update, (err, ticketUp)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        res.status(200).send({message:"Updated"})
    });
};

function insertTicket(req,res){
    let ticket = Ticket(req.body);

    ticket.save((err,ticketStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });
        res.status(200).send(ticketStg);
    });
}

module.exports = {
    getTicket,
    updateTicket,
    insertTicket
}