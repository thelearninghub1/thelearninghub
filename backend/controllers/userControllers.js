const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const sendMail = require("../utils/sendMail");
const cloudinary = require("cloudinary");


// Register User  
exports.registerUser = catchAsyncErrors(async (req,res,next) => {

    
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"avatars",
        quality:80,
        progressive:true
    })
        
        

    const {
        firstName,
        lastName,
        gender,
        qualification,
        curriculumTeaching,
        identification,
        phoneNo,
        email,
        password,
        institute,
        address,
        classTeaching
    } = req.body;


    const user = await User.create({
        firstName,lastName,gender,qualification,curriculumTeaching,identification,phoneNo,email,password,institute,address,classTeaching,avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });

    sendToken(user,201,res)
});

// LOGIN  User
exports.loginUser = catchAsyncErrors(async (req,res,next) => {
    const {email , password} = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Your Email & Password",400))
       
    };

    const user = await User.findOne({email}).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password",400))
    };

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email or Password",400))
       
    };

  sendToken(user,200,res)

})

// Logout User
exports.logoutUser = catchAsyncErrors(async (req,res,next) => {

    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    })

    res.status(200).json({
        success: true,
        message:"Logged Out"
    })
});


// Forgot Password 
exports.forgotPassword = catchAsyncErrors(async (req,res,next) => {

    const user = await User.findOne({email:req.body.email});

    if (!user) {
        next(new ErrorHandler(`User not found`,404))
    };

    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

    const message = `Dear Recepient,
 If you requested a password reset for LMS Password, click the link below. If you didn't make this request, ignore this email.
  \n
  ${resetPasswordUrl} \n
Regards,
The Learning Hub.
  `;

    try {

        sendMail({
            email: user.email,
            subject:`The Learning Hub Password Recovery `,
            message
        })

        res.status(200).json({
            success: true,
            message:`Email ${user.email} sent successfully`
        })
        
    } catch (error) {
        user.resetpasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await  user.save({validateBeforeSave:false})
        return next(new ErrorHandler(error.message,500))
    }


});


// Reset Password 
exports.resetPassword = catchAsyncErrors(async (req,res,next)=>{

    const resetpasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetpasswordToken,
        resetPasswordExpire : {$gt:Date.now()}
    });

    if (!user) {
        return next(new ErrorHandler(`Reset Password Token is invalid or has been Expired.`,400))
    };

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler(`New Password And Confirm Password does not match`,400))
    };

    user.password = req.body.newPassword

    user.resetpasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendToken(user,200,res)

});


// Change Password
exports.updatePassword = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id).select("+password");

   
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched ) {
        return next(new ErrorHandler(`Old Password is incorrect`,400));
    };

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler(`New Password And Confirm Password does not match`,400));
    };

    user.password = req.body.newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        user
    })

});

// Login  User Details
exports.getLoginUserDetails = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
});


// Get All Users --Admin 
exports.getAllUsers = catchAsyncErrors(async (req,res,next)=>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
});


// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req,res,next)=>{
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`,400));
    };

    await cloudinary.v2.uploader.destroy(user.avatar.public_id)

    await user.deleteOne();


    res.status(200).json({
        success: true,
        message: "User Delete Successfully"
    })
})

// Update User Role -- Super Admin
exports.updateUserRole = catchAsyncErrors(async (req,res,next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new: true,
        runValidators: true,
        useFindAndModify:false
    });

    if (!user) {
        return next(new ErrorHandler(`User not found with this Id: ${req.params.id}`,400))
    };


    res.status(200).json({
        success:true,
        user
    })
});

// Get Single User Details 
exports.getUserDetails = catchAsyncErrors(async (req,res,next) => {
    const user = await  User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User not found with this Id: ${req.params.id}`,400))
    };

    res.status(200).json({
        success: true,
        user
    })
})