//mongodb+srv://RutVasner:R080695V@cluster0.b1yksgd.mongodb.net/HadasimProject?retryWrites=true&w=majority',

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rutivasner:R123456V@cluster0.umnk6fy.mongodb.net/HadasimProject',

{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
),
()=>{
    try {
        // something
    } catch (error) {
        // console.error(error);
    }
};
const connection = mongoose.connection;

connection.once('open',() => {
    console.log('connection to DB was succesful');
});
// const MyTable = mongoose.model('koronaDetails', {

//   });
  
// async function deleteAllRecords() {
//     try {
//       await MyTable.deleteMany({});
//       console.log('הרשומות נמחקו בהצלחה!');
//     } catch (error) {
//       console.error('אירעה שגיאה במחיקת הרשומות:', error);
//     } finally {
//       // סגירת חיבור למסד הנתונים
//       mongoose.connection.close();
//     }
//   }
  
// //   // קריאה לפונקציה למחיקת כל הרשומות
//    deleteAllRecords();
