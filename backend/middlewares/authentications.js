const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");



// User

exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) => {
    const {token} = req.cookies;


    if (!token) {
        return next(new ErrorHandler(`Please Login to access this resource.`))
    };

    const decodedData =  jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next()

});


// Admin 

exports.authorizeRole = (...roles) => {
    return(req,res,next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource`))
        }
        next()
    }

}


// Super Admin
exports.superAdmin = (...roles) => {
    return (req,res,next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource`,400));
        };
        next()
    }
}