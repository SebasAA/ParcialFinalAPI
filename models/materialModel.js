'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = Schema({
    name: String,
    stock: Number,
    cost: Number
});

module.exports = mongoose.model("Material", materialSchema)