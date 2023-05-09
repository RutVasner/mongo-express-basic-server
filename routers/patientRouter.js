const express = require('express')
const patientBL = require('../BL/patientBl')
const router = express.Router();

router.route('/')
    .post(function(req, resp)
    {
       
        let obj = req.body;
        if (
            !obj.firstName ||!obj.lastName || !obj.idNumber || !obj.birthDate ||  !obj.phone || !obj.cellPhone
          ) {
            reject(new Error("Missing field(s) in patient data"));
            return;
          }
          //הוספת בדיקת תקינות של סוג פלט כמו טקסט, טלפון - מספרים, נייד מתחיל ב05 וכולל 10 ספרות
        patientBL.createPatient(obj).then(data =>
            {
                // console.log(resp.json(data))
                return resp.json(data)
            })
    })

    module.exports = router;
    
router.route('/')
    .get(function(req, resp)
    {
       
        patientBL.getAllpatients().then(data =>
            {
                return resp.json(data)
            })
    })


    // router.route('/:id')
    // .get(function(req, resp)
    // {
    //     console.log("roter id success")
    //     patientBL.getpatient(id).then(data =>
    //         {
    //             return resp.json(data)
    //         })
    // })
router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        patientBL.getpatient(id).then(data =>
            {
                return resp.json(data)
            })
    })
router.route('/:patientId')
    .get(function(req, resp)
    {
        let patientId = req.params.patientId;
console.log("patientId - router")
console.log(patientId)
        patientBL.getpatient(patientId).then(data =>
            {
                return resp.json(data)
            })
    })
    