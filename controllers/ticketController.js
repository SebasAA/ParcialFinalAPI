'use strict'

const Ticket = require('../models/ticketModel');

function getTicket(req,res){
    let ticketId = req.params.id_tickets;
    
    Ticket.findById(ticketId, (err,ticket)=>{
        if(err) return res.status(500).send({message: `Something is wrong!`});
        if(!ticket) return res.status(404).send("Ticket not found");
        
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

function insertTicket(req, res){
    let ticket = Ticket(req.body);

    ticket.save((err,ticketStg) => {
        if(err) return res.status(500).send({ message: `Something is wrong!` });
        res.status(200).send(ticketStg);
    });
}

function insertProduct(req, res){
    let id_ticket = req.params.id_ticket;
    let id_product_in = req.body.id_product;
    let cant = req.body.cant;

    if(id_product_in==null || id_product_in==""){
        return res.status(404).send({
            message:"material not found"
        });
    }

    Ticket.findById(id_ticket, (err, ticket)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        ticket.shopping_cart.forEach((act) => {
            if(act.id_product==id_product_){
                ticket.shopping_cart.splice(ticket.shopping_cart.indexOf(act),1)
            }
        });

        ticket.shopping_cart.push({id_product: id_product_in, quantity:cant});

        ticket.save((err,ticketSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({message: "Inserted"})
        });
    });
}

module.exports = {
    getTicket,
    updateTicket,
    insertTicket,
    insertProduct
}