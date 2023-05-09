const express = require('express')
const koronaDetailBl = require('../BL/koronaDetailsBl')
const router = express.Router();
    
router.route('/')
    .get(function(req, resp)
    {
        console.log("korona roter success")
        koronaDetailBl.getAllkoronaDetail().then(data =>
            {
                 console.log("korona router data")
                 console.log(data)
                return resp.json(data)
            })
    })



router.route('/:id')
    .get(function(req, resp)
    {

        let id = req.params.id;

        koronaDetailBl.getkoronaDetail(id).then(data =>
            {
                return resp.json(data)
            })
        })

    
    module.exports = router;

    router.route('/')
    .post(function(req, resp)
    {
        //בדיקה האם הת.ז. מופיעה כבר במאגר החולים
        //בדיקת תקינות קלט וסוג קלט
        // console.log("req")
        // console.log(req.body.idNumber)
        
        
        let obj = req.body;
        let idNumber = obj.idNumber;

        // בדיקה האם התעודת זהות כבר קיימת במאגר החולים
        koronaDetailBl.find(idNumber)
            .then(exists => {console.log(exists)
                if (exists) {
                    // אם התעודת זהות כבר קיימת, יש להחזיר שגיאה
                    return resp.status(400).json({ error: 'תעודת זהות כבר קיימת במאגר החולים' });
                } else {
                    // אם התעודת זהות אינה קיימת, ניתן ליצור רשומה חדשה במאגר החולים
                    koronaDetailBl.createKoronaDetail(obj)
                        .then(data => {
                            return resp.status(200).json(data,"success status 200");
                        });
                    }
    })
})
    