const mongoose = require('mongoose');

const connectDatabase = () => {
    
mongoose.connect(process.env.DB_URI).then((data)=>{
    console.log(`MongoDB Successfully Connected with Server at: ${data.connection.host}`);
})
}


module.exports = connectDatabase;