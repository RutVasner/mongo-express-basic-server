const mongoose = require('mongoose');

let koronaDetailSchema = new mongoose.Schema({
  patientId:{type: Number,required:true},
  firstVaccin: {
    date: Date,
    manufacturer: String
  },
  secondVaccin: {
    date: Date,
    manufacturer: String
  },
  thirdVaccin: {
    date: Date,
    manufacturer: String
  },fourthVaccin: {
    date: Date,
    manufacturer: String
  },
  positiveDate: Date,
  outDate: Date
})

let koronaDetailModel = mongoose.model('koronaDetail',koronaDetailSchema)

module.exports = koronaDetailModel;



