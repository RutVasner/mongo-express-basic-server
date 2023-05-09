// var express = require('express');
// var app = express();//יצירת מופע של express
// var cors = require('cors')

// // app.get('/', function (req, res) {
// //   res.send('Hello World!');
// // });
// // app.use(app.router);
// // routes.initialize(app);
// app.use(express.json());
// // app.use(app.router);
// // routes.initialize(app);

//  app.use("/api/patients",patientRouter);
//  //ברגע שרואה סיומת של לינק ככה נןא הןלך לראוטר המתאים
// // module.exports = router ;
// app.listen(8000)


// var express = require('express');
// var app = express();
// const patientRouter = require('./routers/patientRouter');//סוג של import
// require('./config/dataBase');

// app.listen(8000, function () {
//   console.log('Example app listening on port 3000!');
// });

// app.get('/api/patients', function (req, res) {
//   res.send(patientRouter);
// });

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use('/api/auth',authController)
//  app.use('/api/auth/login',authController)
//const userRouter = require('./routers/userRouter');

//const itemRouter = require('./routers/itemRouter');
//const authController = require('./controllers/authController');

//Allows access from react(explorer)


//יש כאן דברים שהעתקתי בלי להבין , מחיפוש באינטרנט אחרי פתרון הבעיה

const express = require('express');
const patientRouter = require('./routers/patientRouter');//סוג של import
const koronaDetailRouter = require('./routers/koronaDetailsRouter');//סוג של import
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({ credentials: true }))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded())
// app.post('/patient',urlencodedParser, (req, res) => {
//     data.push(req.body);
//     res.json(data);
// });
app.use(express.json());
require('./config/dataBase');
 app.use('/api/patients',patientRouter);
 app.use('/api/covidDetails',koronaDetailRouter);
app.listen('8000');
console.log("ok")


