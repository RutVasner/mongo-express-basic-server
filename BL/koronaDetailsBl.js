const koronaDetailModel = require('../model/koronaDetailsMoDel')



exports.getAllkoronaDetail = async function() {
  try {
  
  const data = await koronaDetailModel.find().exec();
  console.log("korona data")
  console.log(data)
  return data;
} catch (err) {
  throw err;
}
}



exports.getkoronaDetail = function(id)
{
    return new Promise((resolve, reject) =>
    {
      koronaDetailModel.findById(id).exec().then(function(data) // העברת הפרמטר id כפרמטר לפונקציית findById()
        {
            resolve(data)
        })
        .catch(function(err){
            reject(err)
        });
    })
}

exports.createKoronaDetail = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let koronaDetail = new koronaDetailModel({

          patientId: obj.patientId,
          firstVaccindate: obj.firstVaccindate,
          firstVaccinmanufacturer: obj.firstVaccinmanufacturer  ,
          secondVaccindate: obj.secondVaccindate,
          secondVaccinmanufacturer: obj.secondVaccinmanufacturer,
          thirdVaccindate: obj.thirdVaccindate,
          thirdVaccinmanufacturer: obj.thirdVaccinmanufacturer,
          fourthVaccindate: obj.fourthVaccindate,
          fourthVaccinmanufacturer: obj.fourthVaccinmanufacturer,
          positiveDate: obj.positiveDate,
          outDate: obj.outDate
}
        );
  koronaDetail.save()
  .then(function(result) {
    console.log("koronaDetail")
    console.log(koronaDetail)
    console.log("obj")
    console.log(obj)
    resolve("created!");
  })
  .catch(function(err) {
    reject(new MissingkoronaDetailError("Could not create koronadetails: " + err));
  });

        })
    }


// exports.getAllkoronaDetail = async function() {
//   return koronaDetailModel.find().exec()
//   .then((data) => {
//     console.log("covid data")
//     console.log(data)
//     return data;
//   })
//   .catch((err) => {
//     throw err;
//   });
// }

