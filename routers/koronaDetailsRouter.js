const express = require('express')
const koronaDetailBl = require('../BL/koronaDetailsBl')
const router = express.Router();
const KoronaDetailM = require('../model/koronaDetailsModel') 
module.exports = router;

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
        .catch(error => {
            console.error(error);
            return resp.status(500).json({ error: 'שגיאה בבדיקת התעודת זהות במאגר החולים' });
        });
    });


    