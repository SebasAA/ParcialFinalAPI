'use strict'

const User = require('../models/userModel');

function createUser(req, res) {
    let user = User(req.body)
    user.save((err, user) => {
        if (err) return res.status(500).send({message: `Soomething is wrong! Error: ${err}`})
        return res.status(200).send({message: `User created successfully. Username ${user.nickname}`})
    })
}

function getSelfUser(req, res){
    let userId = req.user;

    User.findById(userId, (err, user) => {
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send(user);
    });
};

function updateUser(req, res){
    let userId = req.user
    let update = req.body

    User.findByIdAndUpdate(userId, update, (err, userUp) => {
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({message:"Updated"})
    });
};

module.exports = {
    getSelfUser,
    createUser,
    updateUser
}