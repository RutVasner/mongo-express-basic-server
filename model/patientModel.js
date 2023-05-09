const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
            street: String,
            city: String,
            num: Number,
            country: String,
            postalCode: Number,
            });
let patientSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    idNumber : String,
    birthDate: String,
    phone    : String,
    cellPhone: String,
    address   :addressSchema
})
let patientModel = mongoose.model('patient',patientSchema)

module.exports = patientModel;