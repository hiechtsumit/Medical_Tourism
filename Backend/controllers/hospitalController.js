const hospitalModel = require("../models/hospitalModel");
const departmentModel = require('../models/departmentModel');

module.exports.allHospital = async(req,res)=>{
    try {
        const hospitals = await hospitalModel.find();
        return res.send({
            status : 200,
            hospitals,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}

module.exports.each_hospital_details = async(req,res)=>{
    try {
        // console.log("id = ",req.body.id)
        const hospital = await hospitalModel.findById({_id : req.body.id}).populate('departments');
        // console.log(hospital)
        return res.send({
            status : 200,
            hospital,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}


module.exports.each_hospital_department_details = async(req,res)=>{
    try {
        // console.log("id = ",req.body.id)
        const department = await departmentModel.findById({_id : req.body.id}).populate('doctors');
        // console.log(department)
        return res.send({
            status : 200,
            department,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}


module.exports.searchHospital = async(req,res)=>{
    try {
        // console.log("req.body = ",req.body.search)
        const hospitals = await hospitalModel.find(
            {
                $or: [
                    { name: {$regex :  req.body.search,$options : 'i'} },
                    { locationTxt: {$regex :  req.body.search,$options : 'i'} }
                  ]
            }
        );
        return res.send({
            status : 200,
            hospitals,
            message : "Sucessfully"
        });
    } catch (error) {
        console.log(error)
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}