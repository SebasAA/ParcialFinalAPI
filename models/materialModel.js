'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Material", materialSchema)