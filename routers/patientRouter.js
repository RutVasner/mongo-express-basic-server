const express = require('express')
const patientBL = require('../BL/patientBl')
const router = express.Router();
const PatientM = require('../model/patientModel')


router.route('/')
    .post(function(req, resp)
    {
       
        let obj = req.body;
          //הוספת בדיקת תקינות של סוג פלט כמו טקסט, טלפון - מספרים, נייד מתחיל ב05 וכולל 10 ספרות
        const idNumber = obj.idNumber
          PatientM.countDocuments({ idNumber: idNumber })
          .then(count => {
            if (count > 0) {
              // אם התעודת זהות כבר קיימת, יש להחזיר שגיאה
              return resp.status(400).json({ error: 'תעודת זהות כבר קיימת במאגר החולים' });
            } else {
              // אם התעודת זהות אינה קיימת, ניתן ליצור רשומה חדשה במאגר החולים
              patientBL.createPatient(obj).then(data =>
                {
                    // console.log(resp.json(data))
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
          
    })

    module.exports = router;
    
router.route('/')
    .get(function(req, resp)
    {
       
        patientBL.getAllpatients().then(data =>
            {
                return resp.json(data)
            })
    });

router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        patientBL.getpatient(id).then(data =>
            {
                return resp.json(data)
            })
    })

    