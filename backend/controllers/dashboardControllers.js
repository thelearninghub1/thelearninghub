const Dashboard = require("../models/dashboardModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");


// Create Dashboard Data ---Admin
exports.createDashboard = catchAsyncErrors(async (req,res,next)=>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.image,{
        folder:"avatars",
        quality:80,
        progressive:true
    })
    const {name , youtube , activeTopic  , downloadStandards , skill1Name , skill1Percentage , skill2Name , skill2Percentage , skill3Name , skill3Percentage , skill4Name , skill4Percentage , skill5Name , skill5Percentage} = req.body;


    const dashboard = await Dashboard.create({name , youtube , activeTopic  , downloadStandards , skill1Name , skill1Percentage , skill2Name , skill2Percentage , skill3Name , skill3Percentage , skill4Name , skill4Percentage , skill5Name , skill5Percentage , image:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url,
    }})

    res.status(201).json({
        success: true,
        dashboard
    })
});


// All Dashboard Data 
exports.allDashboard = catchAsyncErrors(async (req,res,next)=>{
    const dashboards = await Dashboard.find();

    res.status(200).json({
        success: true,
        dashboards
    })
});


// Get Single Dashboard Details  
exports.getSingleDashboardDetails = catchAsyncErrors(async (req, res, next) => {

    const dashboard = await Dashboard.findById(req.params.id);

    if (!dashboard) {
        return next(new ErrorHandler(`Subject Dashboard Details not found with this id:${req.params.id}`,400))
    };

    res.status(200).json({
        success: true,
        dashboard
    })

});

/// Update Dashboard Details --Admin
exports.updateDashboardDetails = catchAsyncErrors(async (req, res, next) => {
    let dashboard = await Dashboard.findById(req.params.id);

    if (!dashboard) {
        return next(new ErrorHandler(`Dashboard Details not found with this id:${req.params.id}`,400))
    };

    const newdashboardData = {
        name:req.body.name,
        youtube:req.body.youtube,
        activeTopic:req.body.activeTopic,
        downloadStandards:req.body.downloadStandards,
        skill1Name:req.body.skill1Name,
        skill1Percentage:req.body.skill1Percentage,
        skill2Name:req.body.skill2Name,
        skill2Percentage:req.body.skill2Percentage,
        skill3Name:req.body.skill3Name,
        skill3Percentage:req.body.skill3Percentage,
        skill4Name:req.body.skill4Name,
        skill4Percentage:req.body.skill4Percentage,
        skill5Name:req.body.skill5Name,
        skill5Percentage:req.body.skill5Percentage,
    }

    if (req.body.image ) {
    let dashboard = await Dashboard.findById(req.params.id);
    const imageId = dashboard.image.public_id;
    await cloudinary.v2.uploader.destroy(imageId);
        
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image,{
        folder:"avatars",
        quality:80,
        progressive:true
    })

    newdashboardData.image = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
 
    dashboard = await Dashboard.findByIdAndUpdate(req.params.id,newdashboardData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });


    res.status(200).json({
        success: true,
        dashboard
    })
});


// Delete Dahboard  --Admin
exports.deleteDashboard = catchAsyncErrors(async (req,res,next) => {
    const dashboard = await Dashboard.findById(req.params.id);

    if (!dashboard) {
        return next(new ErrorHandler(` Subject Dashboard ${req.params.id} not found`,400))
    };

    await cloudinary.v2.uploader.destroy(dashboard.image.public_id)

    await dashboard.deleteOne();

    res.status(200).json({
        success: true,
        message: ' Subject Dashboard deleted successfully'
    })
})