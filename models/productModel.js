'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name:{
        type: String,
        required: true
    },

    cost:{
        type: number,
        required: true
    },

    price:{
        type: number,
        required: true
    },

    stock:{
        type: number,
        required: true
    },

    sold:{
        type: number,
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
            type: number,
            required:true
        }
    }]

});

module.exports = mongoose.model("Product",productSchema);