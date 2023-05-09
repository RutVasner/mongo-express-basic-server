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
            cellPhone: obj.cellPhone
        });
patient.save()
  .then(function(result) {
    //console.log(result)
    resolve("created!");
  })
  .catch(function(err) {
    reject(new MissingPatientError("Could not create patient: " + err));
  });

        })
    }


exports.getAllpatients = function() {
    return patientModel.find().exec()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
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



