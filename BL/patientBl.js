const patientModel = require('../model/patientModel')

exports.createPatient = function(obj)
{
    return new Promise((resolve, reject) =>
    {
     
        let patient = new patientModel({
            firstName: obj.firstName,
            lastName : obj.lastName,
            idNumber : obj.idNumber,
            birthDate: obj.birthDate,
            phone    : obj.phone,
            cellPhone: obj.cellPhone,
            address    :{
            street: obj.address.street,
            city: obj.address.city,
            country: obj.address.country,
            postalCode: obj.address.postalCode,
            num: obj.address.num
          },
        });
        
patient.save()
  .then(function(result) {
    resolve("created!");
  })
  .catch(function(err) {
    reject(new MissingPatientError("Could not create patient: " + err));
  });

        })
    }


exports.getAllpatients = async function() {
    try {
    
    const data = await patientModel.find().exec();
    console.log("patient data")
    console.log(data)
    return data;
  } catch (err) {
    throw err;
  }
  }


exports.getpatient = function(id)
{
    return new Promise((resolve, reject) =>
    {
        patientModel.findById(id).exec().then(function(data) // העברת הפרמטר id כפרמטר לפונקציית findById()
        {
            resolve(data)
        })
        .catch(function(err){
            reject(err)
        });
    })
}
exports.getpatientbyId = function(patientId)
{
    return new Promise((resolve, reject) =>
    {
        patientModel.findBypatientId(patientId).exec().then(function(data) // העברת הפרמטר id כפרמטר לפונקציית findById()
        {
          console.log("data - bl")
            resolve(data)
        })
        .catch(function(err){
            reject(err)
        });
    })
}



