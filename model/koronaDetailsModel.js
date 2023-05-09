const mongoose = require('mongoose');

let koronaDetailSchema = new mongoose.Schema({
  patientId:{type: Number,required:true},
  firstVaccindate: {
    date: Date,
    manufacturer: Date
  },
  secondVaccin: {
    date: Date,
    manufacturer: Date
  },
  thirdVaccin: {
    date: Date,
    manufacturer: Date
  },fourthVaccin: {
    date: Date,
    manufacturer: Date
  },
  positiveDate: Date,
  outDate: Date
})

let koronaDetailModel = mongoose.model('koronaDetail',koronaDetailSchema)

module.exports = koronaDetailModel;



