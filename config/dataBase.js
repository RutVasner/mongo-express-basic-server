
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
