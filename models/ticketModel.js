'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = Schema({
    final_user = {
        type: String, 
        required: true
    }, 

    state:{
        type: String,
        required:true,
        default:"vigente",
        enum:["vigente","anulado"]
    },

    shopping_cart:[{
        _id: false,
        id_product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity:Number    
    }],

    total:{
        type: Number,
        required:true
    },

    date_time:{
        type:Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model("Ticket", ticketSchema);