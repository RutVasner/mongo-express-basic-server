
const express = require('express');

const patientRouter = require('./routers/patientRouter');//סוג של import

const koronaDetailRouter = require('./routers/koronaDetailsRouter');//סוג של import

const cors = require('cors');

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(cors());

app.use(cors({ credentials: true }))

require('./config/dataBase');

app.use('/api/patients',patientRouter);
console.log("covid")
app.use('/api/koronadetails',koronaDetailRouter);

app.listen('8000');

console.log("ok")


