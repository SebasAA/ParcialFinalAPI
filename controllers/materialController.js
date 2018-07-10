'use strict'

const Material = require('../models/materialModel');

function insertMaterial(req, res){

    let material = new Material();
    let bd = req.body;

    material.name = bd.name;
    material.description = bd.description;
    material.date_time = bd.date_time;
    material.repeat = bd.repeat;
    material.status = bd.status;
    material.id_user = bd.id_user;

    material.save((err, controlStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        res.status(200).send({materialStg});

    });

}

function getMaterial(req, res){
    let MaterialId = req.params.MaterialId;
    Material.findById(HERE,(err,control)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        if(!material) return res.status(403).send({message:"Not found"});

        res.status(200).send({Material});
    });
}

function updateMaterial(req, res){
    let materialId = req.params.groupId;
    let update = req.body;

    Material.findByIdAndUpdate(groupId,update,(err,materialUpdated)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        res.status(200).send({material:materialUpdated})
    });
}

function deleteMaterial(req, res){
    let materialId = req.params.materialId;

    material.findById(groupId,(err,control)=>{
        if(err) return res.status(500).send({message:"Ocurrió un error interno"});

        material.remove(err =>{
            if(err) return res.status(500).send({message:"Internal Error Server"});
            if(!control) return req.staus(404).send({message:"Not found"});
            res.status(200).send({message:"El material ha sido eliminado"});
        });
    });
}

module.exports = {insertMaterial, 
				getMaterial, 
				updateMaterial,
				deleteMaterial}