# server

This project is a Node.js application that uses the MongoDB database.
The project allows users to perform basic operations such as creating and reading information from the database.

### installation

* download Node.js from  https://nodejs.org/
* download MongoDB from  https://www.mongodb.com/download-center/community

### Installs for code management

* Install git software for code management https://git-scm.com/downloads

### Code Source

* download the project code via "git clone https://github.com/RutVasner/server.git"
* install npm packages by the command:
$ "npm install"
  includes: express,cors,mongoose.
 * for runing the program you can use the forward json file:

##### patients table:
 
  {
  "patientId": "302361910",
  
  "firstVaccin": {
    "date": "05/06/2021",
    "manufacturer": "05/06/2021"
  },
  
  "secondVaccin": {
    "date": "05/06/2021",
    "manufacturer": "05/06/2021"
  },
  
  "thirdVaccin": {
    "date": "05/06/2021",
    "manufacturer": "05/06/2021"
  },
  "fourthVaccin": {
    "date": "05/06/2021",
    "manufacturer": "05/06/2021"
  },
  
  "positiveDate": "05/06/2021",
  
  "outDate": "05/06/2021"
}

##### covidDetails

{
"patientId": 123456789,

"firstVaccin":{ "date": "2021-07-08T21:00:00.000Z",
    "manufacturer": "Pfizer"
    },
    
"secondVaccin":{ 
      "date":"2021-07-08T21:00:00.000Z",
    "manufacturer": "Pfizer"
    },
    
"thirdVaccin": {
"date":"2021-07-08T21:00:00.000Z",
"manufacturer": "pfizer"}
  ,
  
  "fourthVaccin": {
    "date": "2021-07-08T21:00:00.000Z",
    "manufacturer":"Pfizer"
  },
  
  "positiveDate":  "2021-07-08T21:00:00.000Z",
  
  "outDate":  "2021-07-08T21:00:00.000Z"
}

  
run the project by the command

$ node index.js
