const koronaDetailModel = require('../model/koronaDetailsModel')



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
      if( !obj.patientId || !obj.positiveDate || !obj.outDate)//בדיקה האם חסרים נתונים חשובים בקלט
        {
        reject(new Error("Missing field(s) in patient data"));    
        }
        let koronaDetail = new koronaDetailModel({
          patientId:obj.patientId,
          firstVaccin: {
            date: obj.firstVaccin.date,
            manufacturer: obj.firstVaccin.manufacturer
          },
          secondVaccin: {
            date: obj.secondVaccin.date,
            manufacturer: obj.secondVaccin.manufacturer
          },
          thirdVaccin: {
            date: obj.thirdVaccin.date,
            manufacturer: obj.thirdVaccin.manufacturer
          },fourthVaccin: {
            date: obj.fourthVaccin.date,
            manufacturer: obj.fourthVaccin.manufacturer
          },
          positiveDate: obj.positiveDate,
          outDate: obj.outDate
    });
  koronaDetail.save()
  .then(function(result) {
    console.log("koronaDetail")
    console.log(koronaDetail)
    console.log("obj")
    console.log(obj)
    resolve("created!");
  })
  .catch(function(err) {
    reject(new Error(err ,"Could not create koronadetails "));
  });

        })
    }

