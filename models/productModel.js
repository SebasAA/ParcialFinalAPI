'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name:{
        type: String,
        required: true
    },

    cost:{
        type: Number,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    stock:{
        type: Number,
        required: true
    },

    sold:{
        type: Number,
        required: true
    },

    category:{
        type: String,
        required: true,
        enum:["accesorios","tazas","textiles","artesanales", "otros"]
    },

    product_materials:[{
        _id:false,
        id_material: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Material',
            required: true
        },
        quantity:{
            type: Number,
            required:true
        }
    }]

});

module.exports = mongoose.model("Product",productSchema);