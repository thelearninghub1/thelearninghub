const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const couldinary = require("cloudinary");


// Uncaught Exceptions Errors
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down due to Uncaught Exception.`);
    process.exit(1);
});



// Config
dotenv.config({path:"./backend/config/config.env"});


// Couldinary
couldinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

// Connect Database
connectDatabase()

/// Create a Server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port http://localhost:${process.env.PORT}`);
})


// Unhandled Promises Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down due to Unhandled Promises Rejection`);
    server.close(()=>{
        process.exit(1)
    });
})