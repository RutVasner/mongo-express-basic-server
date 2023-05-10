const express = require('express')
const koronaDetailBl = require('../BL/koronaDetailsBl')
const router = express.Router();
const KoronaDetailM = require('../model/koronaDetailsModel')
module.exports = router;
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:8000'; // MongoDB connection URI
const dbName = 'HadasimProject'; // Your database name


router.route('/')
    .get(function(req, resp)
    {
        
        koronaDetailBl.getAllkoronaDetail().then(data =>
            {
                 console.log("documents")
                 console.log(documents)
                return resp.json(data)
            })
});
    



    router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        koronaDetailBl.getkoronaDetail(id).then(data =>
            {
                return resp.json(data)
            })
    })


router.route('/')
    .post(function(req, resp)
    {        
        let obj = req.body;
        let idNumber = obj.patientId;
        console.log (idNumber);
        console.log (obj);

        if (idNumber.length > 9) {
            return resp.status(400).json({ error: 'תעודת זהות ארוכה מידי' });
        }
        

        // בדיקה האם התעודת זהות כבר קיימת במאגר החולים
        KoronaDetailM.countDocuments({ patientId: idNumber })
        .then(count => {
            if (count > 0) {
              console.log("KoronaDetailM")
              console.log(KoronaDetailM.data)
                // אם התעודת זהות כבר קיימת, יש להחזיר שגיאה
                return resp.status(400).json({ error: 'תעודת זהות כבר קיימת במאגר החולים' });
            } else {
                // אם התעודת זהות אינה קיימת, ניתן ליצור רשומה חדשה במאגר החולים
                koronaDetailBl.createKoronaDetail(obj)
                .then(data => {
                    return resp.status(200).json( "success status 200");
                })
                .catch(error => {
                    console.error(error);
                    return resp.status(500).json({ error: 'שגיאה ביצירת רשומה חדשה במאגר החולים' });
                });
            }
        })
        
    })

    //נסיון לביצוע שאלת אתגר 3
    // console.log("dbName")
        // console.log(dbName)
        // MongoClient.connect(uri, function(err, client) {
        //     if (err) {
        //       console.log('Error connecting to MongoDB:');
        //       return;
        //     }
        //     const db = client.db(dbName);
        //     const collection = db.collection('koronadetails'); // Replace with your collection name
        //   console.log("collection")
        //   console.log(collection)
        //const documents = [];
            // KoronaDetailM.find({}).toArray(function(err, documents) {
            //     if (err) {
            //       console.log('Error retrieving documents:', err);
            //       return;
            //     }
            //     // Process each document here
            //     documents.forEach(function(document) {
            //       // Perform your desired operations on each document
            //       console.log(document);
            //     });           
            //     client.close();
        //   });
        