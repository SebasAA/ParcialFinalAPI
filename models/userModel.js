'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
	nickname:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true	
	} 
	rol_type:{
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', UserSchema);