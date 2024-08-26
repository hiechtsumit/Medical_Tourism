const hospitalModel = require("../../models/hospitalModel");
const departmentModel = require("../../models/departmentModel");
const doctorModel = require("../../models/doctorModel");

// const guestHouseModel = require('../../models/guestHouseModel');
const guesthouseModel = require("../../models/guestHouseModel");


/******************************************
 
    Add New Hospital

 ******************************************/


module.exports.add_hospital = async (req,res)=>{
    try {
        // console,console.log((req.body));
        const {hospital, departments} = req.body;
        const newHospital = new hospitalModel({
            name : hospital.name,
            locationTxt : hospital.location,
            locationUrl : hospital.locationLink,
            about : hospital.about,
            images : hospital.images
        });
        const new_hospital = await newHospital.save();
        for await (i of departments){
            const new_department = new departmentModel({
                hospital : new_hospital._id,
                name : i.name,
                about: i.about,
                thumbnil : i.imageUrl
            });
            const department = await new_department.save();
            await hospitalModel.findByIdAndUpdate({_id : new_hospital._id},{
                $push : {
                    departments : department._id
                }
            })
            for await (j of i.doctors){
                const new_doctor = new doctorModel({
                    department : department._id,
                    name : j.name,
                    about: j.about,
                });
                const doctor = await new_doctor.save();
                await departmentModel.findByIdAndUpdate({_id : department._id},{
                    $push : {
                        doctors : doctor._id
                    }
                })
            }
        }
        return res.send({
            status : 200,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Error"
        });
    }
}





/******************************************
 
    Add New Guest House

 ******************************************/


    module.exports.add_guestHouse = async (req,res)=>{
        try {
            // console,console.log((req.body));
            const {name, address, location, about, rating, amenities, rooms, price, images} = req.body;
            const new_guestHouse = new guesthouseModel(req.body)
            const guestHouse = await new_guestHouse.save();
            return res.send({
                status : 200,
                message : "Sucessfully Added New Gust House"
            });
        } catch (error) {
            return res.send({
                status : 502,
                message : "Server Error! please Try Again"
            });
        }
    }