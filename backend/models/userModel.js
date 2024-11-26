const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

// user Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please Enter Your First Name"]
    },
    lastName:{
        type:String,
        required:[true,"Please Enter Your First Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a Valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false
    },
    address:{
        type:String,
        required:[true,"Please Enter Your Home Address"],
    },
    gender:{
        type:String,
        required:[true,"Please Enter Your Gender"]
    },
    qualification:{
        type:String,
        required:[true,"Please Enter Your Qualification"]
    },
    phoneNo:{
        type:String,
        required:[true,"Please Enter Your Phone Number"],
    },
    identification:{
        type:String,
        required:[true,"Please Enter Your National ID Number or Passport Number"] 
    },
    classTeaching:{
        type:String,
        required:[true,"Please Enter a Gade In which you are teaching"]
    },
    curriculumTeaching:{
        type:String,
        required:[true,"Please Enter Your Curriculum Name in which you are teaching"]
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    institute:{
        type:String,
        required:[true,"Please Enter Your Institute Name"]
    },
    role:{
        type:String,
        required:true,
        default:"User"
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    resetpasswordToken:String,
    resetPasswordExpire:Date,
})


// Password hash
userSchema.pre("save", async function(next){

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcryptjs.hash(this.password,10)
});

// Generating Token For Login
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}

/// Compare Password
userSchema.methods.comparePassword = function  (password) {
    return  bcryptjs.compare(password,this.password)
};

// Generating a Reset Password Token
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetpasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};


module.exports = mongoose.model("User",userSchema);