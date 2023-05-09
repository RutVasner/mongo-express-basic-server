const mongoose = require('mongoose');

let koronaDetailSchema = new mongoose.Schema({
  patientId               : String,
  firstVaccindate         : String,
  firstVaccinmanufacturer : String,
  secondVaccindate        : String,
  secondVaccinmanufacturer: String,
  thirdVaccindate         : String,
  thirdVaccinmanufacturer : String,
  fourthVaccindate        : String,
  fourthVaccinmanufacturer: String,
  positiveDate            : String,
  outDate                 : String
})
let koronaDetailModel = mongoose.model('koronaDetail',koronaDetailSchema)

module.exports = koronaDetailModel;



