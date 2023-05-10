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
* install npm packages by "npm install" command 
  includes: express,cors,mongoose.
 * for runing the program you can use the forward json:
 * 
 +++-> patients table:
 
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

->covidDetails

{
"patientId": 123456789,

"firstVaccin":{ "date":"07/09/2021",
    "manufacturer": "Pfizer"
    },
    
"secondVaccin":{ 
      "date":"07/09/2021",
    "manufacturer": "Pfizer"
    },
    
"thirdVaccin": {
"date":"07/09/2021",
"manufacturer": "pfizer"}
  ,
  
  "fourthVaccin": {
    "date": "07/09/2021",
    "manufacturer":"Pfizer"
  },
  
  "positiveDate":  "07/09/2021",
  
  "outDate":  "07/09/2021"
}

  
run the project by "node index.js" command

NOTE:
this project was built for a curtain purpose and not to be copy.
