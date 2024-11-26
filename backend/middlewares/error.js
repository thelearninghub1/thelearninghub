const ErrorHandler = require("../utils/errorhandler")

module.exports = (err,req,res,next) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    // Duplicate Email Entered
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 500)
    };

    

    res.status(err.statusCode).json({
        success: false,
        message:err.message
    })
}