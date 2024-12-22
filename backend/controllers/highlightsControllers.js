const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Highlight = require('../models/highlights');
const cloudinary = require('cloudinary');
const ErrorHandler = require("../utils/errorhandler");

// Create Highlights  -- Super Admin
exports.createHighlights = catchAsyncErrors(async (req,res,next) => {

    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    const imagesLinks = [];
  
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "projects",
        quality:80,
        progressive:true
      });
  
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;

    const highlight = await Highlight.create({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        description: req.body.description,
        images:req.body.images,
        avatar:{
            public_id:req.user.avatar.public_id,
            url:req.user.avatar.url
        },
    });

    res.status(200).json({
        success: true,
        highlight
    })
});


// Get All Highlights 
exports.getAllHighlights = catchAsyncErrors(async (req,res,next) => {
    const highlights = await Highlight.find();

    res.status(200).json({
        success: true,
        highlights
    })
});


// Get Single Highlight Details 
exports.getSingleHighlight = catchAsyncErrors(async (req,res,next) => {
    const highlight = await Highlight.findById(req.params.id);

    if (!highlight) {
        return next(new ErrorHandler(`Highlight not found with this id:${req.params.id}`,400))
    };

    res.status(200).json({
        success: true,
        highlight
    })
});


// Update Highlights  -- Super Admin
exports.updateHighlights = catchAsyncErrors(async (req,res,next) => {

    let highlight = await Highlight.findById(req.params.id);

    if (!highlight) {
        return next(new ErrorHandler(`Highlight not found with this id:${req.params.id}`,400))
    };

      // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < highlight.images.length; i++) {
      await cloudinary.v2.uploader.destroy(highlight.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "projects",
        quality:80,
        progressive:true
    });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

    highlight = await Highlight.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true, useFindAndModify: false});
    
    res.status(200).json({
        success: true,
        highlight
    })
});

// Delete Highlights -- Super Admin
exports.deleteHighlights = catchAsyncErrors(async (req,res,next) => {
    const highlight = await Highlight.findById(req.params.id);

    if (!highlight) {
        return next(new ErrorHandler(`Highlight not found with this id:${req.params.id}`,400))
    };

    for (let i = 0; i < highlight.images.length; i++) {
        await cloudinary.v2.uploader.destroy(highlight.images[i].public_id)
    }

    await highlight.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Highlight deleted successfully'
    })
});
