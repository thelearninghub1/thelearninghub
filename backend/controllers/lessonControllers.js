const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Lesson = require("../models/lessonModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");
 

// Create Lesson --Admin
exports.createLesson = catchAsyncErrors(async (req,res,next) => {

    const {name ,content1Name , content2Name , content3Name , content4Name , contentSub1Name , contentSub2Name , contentSub3Name , contentSub4Name , contentSub5Name , contentSubFile , subContentTime , SubContentanswerKey, SubContentclassRoomLink , SubContentStandard , video1Name , video1Link, video2Name , video2Link , video3Name , video3Link , video4Name , video4Link,video5Name,video5Link,video6Name,video6Link,game1Name,game1Link,game2Name , game2Link , game3Name , game3Link , game4Name , game4Link ,  content2Sub1Name,
        content3Sub1Name,
        content4Sub1Name,
        content2Sub2Name,
        content3Sub2Name,
        content4Sub2Name,
        content2Sub3Name,
        content3Sub3Name,
        content4Sub3Name,
        content2Sub4Name,
        content3Sub4Name,
        content4Sub4Name,   content2Sub5Name,
        content3Sub5Name,
        content4Sub5Name,
        contentSubFile2,
        contentSubFile3,
        contentSubFile4,
        subContentTime2,
        subContentTime3,
        subContentTime4,
        SubContentanswerKey2,
        SubContentanswerKey3,
        SubContentanswerKey4,
        SubContentclassRoomLink2,
        SubContentclassRoomLink3,
        SubContentclassRoomLink4,      SubContentStandard2,
        SubContentStandard3,
        SubContentStandard4, } = req.body;

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"Lessons",
            quality:80,
            progressive:true
        }) 

        const myCloud1 = await cloudinary.v2.uploader.upload(req.body.content1Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const myCloud2 = await cloudinary.v2.uploader.upload(req.body.content2Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const myCloud3 = await cloudinary.v2.uploader.upload(req.body.content3Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const myCloud4 = await cloudinary.v2.uploader.upload(req.body.content4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud = await cloudinary.v2.uploader.upload(req.body.contentSub1Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud2 = await cloudinary.v2.uploader.upload(req.body.content2Sub1Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud3 = await cloudinary.v2.uploader.upload(req.body.content3Sub1Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud4 = await cloudinary.v2.uploader.upload(req.body.content4Sub1Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud5 = await cloudinary.v2.uploader.upload(req.body.contentSub2Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud6 = await cloudinary.v2.uploader.upload(req.body.content2Sub2Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud7 = await cloudinary.v2.uploader.upload(req.body.content3Sub2Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud8 = await cloudinary.v2.uploader.upload(req.body.content4Sub2Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud9 = await cloudinary.v2.uploader.upload(req.body.contentSub3Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud10 = await cloudinary.v2.uploader.upload(req.body.content2Sub3Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud11 = await cloudinary.v2.uploader.upload(req.body.content3Sub3Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud12 = await cloudinary.v2.uploader.upload(req.body.content4Sub3Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud13 = await cloudinary.v2.uploader.upload(req.body.contentSub4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud14 = await cloudinary.v2.uploader.upload(req.body.content2Sub4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud15 = await cloudinary.v2.uploader.upload(req.body.content3Sub4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud16 = await cloudinary.v2.uploader.upload(req.body.content4Sub4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud17 = await cloudinary.v2.uploader.upload(req.body.contentSub5Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })

        const mySubCloud18 = await cloudinary.v2.uploader.upload(req.body.content2Sub5Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud19 = await cloudinary.v2.uploader.upload(req.body.content3Sub5Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
        const mySubCloud20 = await cloudinary.v2.uploader.upload(req.body.content4Sub5Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })


    const lesson = await Lesson.create({
        name,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        },
        content1Name,
        content1Image:{
            public_id:myCloud1.public_id,
            url:myCloud1.secure_url,
        },
        content2Name,
        content2Image:{
            public_id:myCloud2.public_id,
            url:myCloud2.secure_url,
        },
        content3Name,
        content3Image:{
            public_id:myCloud3.public_id,
            url:myCloud3.secure_url,
        },
        content4Name,
        content4Image:{
            public_id:myCloud4.public_id,
            url:myCloud4.secure_url,
        },
        contentSub1Name,
        content2Sub1Name,
        content3Sub1Name,
        content4Sub1Name,

        contentSub1Image:{
            public_id:mySubCloud.public_id,
            url:mySubCloud.secure_url,
        },
        content2Sub1Image:{
            public_id:mySubCloud2.public_id,
            url:mySubCloud2.secure_url,
        },
        content3Sub1Image:{
            public_id:mySubCloud3.public_id,
            url:mySubCloud3.secure_url,
        },
        content4Sub1Image:{
            public_id:mySubCloud4.public_id,
            url:mySubCloud4.secure_url,
        },
        contentSub2Name,
        content2Sub2Name,
        content3Sub2Name,
        content4Sub2Name,
        contentSub2Image:{
            public_id:mySubCloud5.public_id,
            url:mySubCloud5.secure_url,
        },
        content2Sub2Image:{
            public_id:mySubCloud6.public_id,
            url:mySubCloud6.secure_url,
        },
        content3Sub2Image:{
            public_id:mySubCloud7.public_id,
            url:mySubCloud7.secure_url,
        },
        content4Sub2Image:{
            public_id:mySubCloud8.public_id,
            url:mySubCloud8.secure_url,
        },
        contentSub3Name,
        content2Sub3Name,
        content3Sub3Name,
        content4Sub3Name,

        contentSub3Image:{
            public_id:mySubCloud9.public_id,
            url:mySubCloud9.secure_url,
        },
        content2Sub3Image:{
            public_id:mySubCloud10.public_id,
            url:mySubCloud10.secure_url,
        },
        content3Sub3Image:{
            public_id:mySubCloud11.public_id,
            url:mySubCloud11.secure_url,
        },
        content4Sub3Image:{
            public_id:mySubCloud12.public_id,
            url:mySubCloud12.secure_url,
        },
        contentSub4Name,
        content2Sub4Name,
        content3Sub4Name,
        content4Sub4Name,

        contentSub4Image:{
            public_id:mySubCloud13.public_id,
            url:mySubCloud13.secure_url,
        },
        content2Sub4Image:{
            public_id:mySubCloud14.public_id,
            url:mySubCloud14.secure_url,
        },
        content3Sub4Image:{
            public_id:mySubCloud15.public_id,
            url:mySubCloud15.secure_url,
        },
        content4Sub4Image:{
            public_id:mySubCloud16.public_id,
            url:mySubCloud16.secure_url,
        },
        contentSub5Name,
        content2Sub5Name,
        content3Sub5Name,
        content4Sub5Name,

        contentSub5Image:{
            public_id:mySubCloud17.public_id,
            url:mySubCloud17.secure_url,
        },
        content2Sub5Image:{
            public_id:mySubCloud18.public_id,
            url:mySubCloud18.secure_url,
        },
        content3Sub5Image:{
            public_id:mySubCloud19.public_id,
            url:mySubCloud19.secure_url,
        },
        content4Sub5Image:{
            public_id:mySubCloud20.public_id,
            url:mySubCloud20.secure_url,
        },
        contentSubFile,
        contentSubFile2,
        contentSubFile3,
        contentSubFile4,

        subContentTime,
        subContentTime2,
        subContentTime3,
        subContentTime4,


        SubContentanswerKey,
        SubContentanswerKey2,
        SubContentanswerKey3,
        SubContentanswerKey4,


        SubContentclassRoomLink,
        SubContentclassRoomLink2,
        SubContentclassRoomLink3,
        SubContentclassRoomLink4,

        SubContentStandard,
        SubContentStandard2,
        SubContentStandard3,
        SubContentStandard4,
        video1Name,
        video1Link,
        video2Name,
        video2Link,
        video3Name,
        video3Link,
        video4Name,
        video4Link,
        video5Name,
        video5Link,
        video6Name,
        video6Link,
        game1Name,
        game1Link,
        game2Name,
        game2Link,
        game3Name,
        game3Link,
        game4Name,
        game4Link,


    });


    res.status(201).json({
        success: true,
        lesson
    })
    
});



// Get Single Lesson Details
exports.getSingleLessonDetails =  catchAsyncErrors(async (req,res,next)=>{

    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
        return next(new ErrorHandler(`Lesson not found with this id: ${req.params.id}`,400));
    };

    res.status(200).json({
        success: true,
        lesson
    })
});

// Get All Lessons 
exports.getAllLesson = catchAsyncErrors(async (req,res,next) => {

    const lesson = await Lesson.find();

    res.status(200).json({
        success: true,
        lesson
    })
});


// Update Lesson -- Admin
exports.updateLesson = catchAsyncErrors(async (req,res,next) => {

    let lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
        return next(new ErrorHandler(`Lesson not found with this id ${req.params.id}`,400));
    };

    
const newLessonData = {
    name: req.body.name,
    content1Name: req.body.content1Name,
    content2Name: req.body.content2Name,
    content3Name:req.body.content3Name,
    content4Name:req.body.content4Name,
    contentSub1Name:req.body.contentSub1Name,
    content2Sub1Name:req.body.content2Sub1Name,
    content3Sub1Name:req.body.content3Sub1Name,
    content4Sub1Name:req.body.content4Sub1Name,
    contentSub2Name:req.body.contentSub2Name,
    content2Sub2Name:req.body.content2Sub2Name,
    content3Sub2Name:req.body.content3Sub2Name,
    content4Sub2Name:req.body.content4Sub2Name,
    contentSub3Name:req.body.contentSub3Name,
    content2Sub3Name:req.body.content2Sub3Name,
    content3Sub3Name:req.body.content3Sub3Name,
    content4Sub3Name:req.body.content4Sub3Name,
    contentSub4Name:req.body.contentSub4Name,
    content2Sub4Name:req.body.content2Sub4Name,
    content3Sub4Name:req.body.content3Sub4Name,
    content4Sub4Name:req.body.content4Sub4Name,
    contentSub5Name:req.body.contentSub5Name,
    content2Sub5Name:req.body.content2Sub5Name,
    content3Sub5Name:req.body.content3Sub5Name,
    content4Sub5Name:req.body.content4Sub5Name,
    contentSubFile:req.body.contentSubFile,
    contentSubFile2:req.body.contentSubFile2,
    contentSubFile3:req.body.contentSubFile3,
    contentSubFile4:req.body.contentSubFile4,
    subContentTime:req.body.subContentTime,
    subContentTime2:req.body.subContentTime2,
    subContentTime3:req.body.subContentTime3,
    subContentTime4:req.body.subContentTime4,
    SubContentanswerKey:req.body.SubContentanswerKey,
    SubContentanswerKey2:req.body.SubContentanswerKey2,
    SubContentanswerKey3:req.body.SubContentanswerKey3,
    SubContentanswerKey4:req.body.SubContentanswerKey4,
    SubContentclassRoomLink:req.body.SubContentclassRoomLink,
    SubContentclassRoomLink2:req.body.SubContentclassRoomLink2,
    SubContentclassRoomLink3:req.body.SubContentclassRoomLink3,
    SubContentclassRoomLink4:req.body.SubContentclassRoomLink4,
    SubContentStandard:req.body.SubContentStandard,
    SubContentStandard2:req.body.SubContentStandard2,
    SubContentStandard3:req.body.SubContentStandard3,
    SubContentStandard4:req.body.SubContentStandard4,
    video1Name:req.body.video1Name,
    video1Link:req.body.video1Link,
    video2Name:req.body.video2Name,
    video2Link:req.body.video2Link,
    video3Name:req.body.video3Name,
    video3Link:req.body.video3Link,
    video4Name:req.body.video4Name,
    video4Link:req.body.video4Link,
    video5Name:req.body.video5Name,
    video5Link:req.body.video5Link,
    video6Name:req.body.video6Name,
    video6Link:req.body.video6Link,
    game1Name:req.body.game1Name,
    game1Link:req.body.game1Link,
    game2Name:req.body.game2Name,
    game2Link:req.body.game2Link,
    game3Name:req.body.game3Name,
    game3Link:req.body.game3Link,
    game4Name:req.body.game4Name,
    game4Link:req.body.game4Link,
}

if (req.body.avatar !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.avatar.public_id;
await cloudinary.v2.uploader.destroy(imageId);
    
const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"Lessons",
    quality:80,
    progressive:true
})

newLessonData.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
}


if (req.body.content1Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content1Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content1Image,{
    folder:"Lessons",
    quality:80,
    progressive:true
})

newLessonData.content1Image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
}


if (req.body.content2Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content2Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Image,{
    folder:"Lessons",
    quality:80,
    progressive:true
})

newLessonData.content2Image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
}

if (req.body.content3Image !== "") {
    let lesson = await Lesson.findById(req.params.id);
    const imageId = lesson.content3Image.public_id;
    await cloudinary.v2.uploader.destroy(imageId);
        
    const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Image,{
        folder:"Lessons",
        quality:80,
        progressive:true
    })

    newLessonData.content3Image = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

if (req.body.content4Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content4Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
        const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Image,{
            folder:"Lessons",
            quality:80,
            progressive:true
        })
    
        newLessonData.content4Image = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }

if (req.body.contentSub1Image !== "") {
            let lesson = await Lesson.findById(req.params.id);
            const imageId = lesson.contentSub1Image.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.contentSub1Image,{
                folder:"Lessons",
                quality:80,
                progressive:true
            })
        
            newLessonData.contentSub1Image = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }

if (req.body.content2Sub1Image !== "") {
                let lesson = await Lesson.findById(req.params.id);
                const imageId = lesson.content2Sub1Image.public_id;
                await cloudinary.v2.uploader.destroy(imageId);
                    
                const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Sub1Image,{
                    folder:"Lessons",
                    quality:80,
                    progressive:true
                })
            
                newLessonData.content2Sub1Image = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                  };
                }
if (req.body.content3Sub1Image !== "") {
    let lesson = await Lesson.findById(req.params.id);
    const imageId = lesson.content3Sub1Image.public_id;
    await cloudinary.v2.uploader.destroy(imageId);
                        
    const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Sub1Image,{
   folder:"Lessons",
  quality:80,
  progressive:true
  })
                
 newLessonData.content3Sub1Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
  }}
if (req.body.content4Sub1Image !== "") {
  let lesson = await Lesson.findById(req.params.id);
  const imageId = lesson.content4Sub1Image.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
                            
 const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Sub1Image,{
   folder:"Lessons",
   quality:80,
   progressive:true
   })
                    
  newLessonData.content4Sub1Image = {
  public_id: myCloud.public_id,
  url: myCloud.secure_url,
  }} 
                        
                        
if (req.body.contentSub2Image !== "") {
  let lesson = await Lesson.findById(req.params.id);
  const imageId = lesson.contentSub2Image.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
                                
  const myCloud = await cloudinary.v2.uploader.upload(req.body.contentSub2Image,{
  folder:"Lessons",
  quality:80,
  progressive:true
  })
                        
  newLessonData.contentSub2Image = {
  public_id: myCloud.public_id,
  url: myCloud.secure_url,
   } } 

if (req.body.content2Sub2Image !== "") {
  let lesson = await Lesson.findById(req.params.id);
  const imageId = lesson.content2Sub2Image.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
                                    
  const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Sub2Image,{
  folder:"Lessons",  
  progressive:true
  })
                            
  newLessonData.content2Sub2Image = {
  public_id: myCloud.public_id,
  url: myCloud.secure_url,
  };
   }  
                                
                                
if (req.body.content3Sub2Image !== "") {
  let lesson = await Lesson.findById(req.params.id);
  const imageId = lesson.content3Sub2Image.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
                                        
  const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Sub2Image,{
  folder:"Lessons",
  quality:80,
  progressive:true
  })
                                
  newLessonData.content3Sub2Image = {
  public_id: myCloud.public_id,
  url: myCloud.secure_url,
  }} 
                                    
if (req.body.content4Sub2Image !== "") {
  let lesson = await Lesson.findById(req.params.id);
  const imageId = lesson.content4Sub2Image.public_id;
  await cloudinary.v2.uploader.destroy(imageId);
                                            
  const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Sub2Image,{
  folder:"Lessons",
  quality:80,
  progressive:true
  })
                                    
  newLessonData.content4Sub2Image = {
  public_id: myCloud.public_id,
  url: myCloud.secure_url,
  } }        
                                        
                                        

if (req.body.contentSub3Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.contentSub3Image.public_id;
 await cloudinary.v2.uploader.destroy(imageId);
                                                
const myCloud = await cloudinary.v2.uploader.upload(req.body.contentSub3Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                        
newLessonData.contentSub3Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}    
                                            
                                            







if (req.body.content2Sub3Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content2Sub3Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Sub3Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                            
newLessonData.content2Sub3Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}
} 



if (req.body.content3Sub3Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content3Sub3Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                        
const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Sub3Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                
newLessonData.content3Sub3Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}   

if (req.body.content4Sub3Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content4Sub3Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                            
const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Sub3Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                    
newLessonData.content4Sub3Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}
}   

if (req.body.contentSub4Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.contentSub4Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);

const myCloud = await cloudinary.v2.uploader.upload(req.body.contentSub4Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                        
newLessonData.contentSub4Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  


if (req.body.content2Sub4Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content2Sub4Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Sub4Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                            
newLessonData.content2Sub4Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

if (req.body.content3Sub4Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content3Sub4Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                        
const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Sub4Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                                
newLessonData.content3Sub4Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

                                                                    
if (req.body.contentSub5Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.contentSub5Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                        
const myCloud = await cloudinary.v2.uploader.upload(req.body.contentSub5Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                                
newLessonData.contentSub5Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

if (req.body.content4Sub4Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content4Sub4Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                            
const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Sub4Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                                    
newLessonData.content4Sub4Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

if (req.body.content2Sub5Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content2Sub5Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                                
const myCloud = await cloudinary.v2.uploader.upload(req.body.content2Sub5Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                                        
newLessonData.content2Sub5Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

if (req.body.content3Sub5Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content3Sub5Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                                    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content3Sub5Image,{
folder:"Lessons",
quality:80,
progressive:true
})

newLessonData.content3Sub5Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}  

                                                                                
if (req.body.content4Sub5Image !== "") {
let lesson = await Lesson.findById(req.params.id);
const imageId = lesson.content4Sub5Image.public_id;
await cloudinary.v2.uploader.destroy(imageId);
                                                                                    
const myCloud = await cloudinary.v2.uploader.upload(req.body.content4Sub5Image,{
folder:"Lessons",
quality:80,
progressive:true
})
                                                                            
newLessonData.content4Sub5Image = {
public_id: myCloud.public_id,
url: myCloud.secure_url,
}}

                                                                     
    lesson = await Lesson.findByIdAndUpdate(req.params.id,newLessonData,{

        new:true,
        runValidators:true,
        useFindAndModify:false
    });


    res.status(200).json({
        success: true,
        lesson
    })

});



// Delete Lesson --Admin
exports.deleteLesson = catchAsyncErrors(async (req,res,next)=>{

    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
        return next(new ErrorHandler(`Lesson not found with id ${req.params.id}`,400));
    };

    if (req.body.avatar !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.avatar.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
        }
        
        
        if (req.body.content1Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content1Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
   
        }
        
        
        if (req.body.content2Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content2Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
       
        }
        
        if (req.body.content3Image !== "") {
            let lesson = await Lesson.findById(req.params.id);
            const imageId = lesson.content3Image.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
            }
        
        if (req.body.content4Image !== "") {
                let lesson = await Lesson.findById(req.params.id);
                const imageId = lesson.content4Image.public_id;
                await cloudinary.v2.uploader.destroy(imageId);
                    
                }
        
        if (req.body.contentSub1Image !== "") {
                    let lesson = await Lesson.findById(req.params.id);
                    const imageId = lesson.contentSub1Image.public_id;
                    await cloudinary.v2.uploader.destroy(imageId);
                    }
        
        if (req.body.content2Sub1Image !== "") {
            let lesson = await Lesson.findById(req.params.id);
            const imageId = lesson.content2Sub1Image.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                        }

        if (req.body.content3Sub1Image !== "") {
            let lesson = await Lesson.findById(req.params.id);
            const imageId = lesson.content3Sub1Image.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                                
           }
        if (req.body.content4Sub1Image !== "") {
          let lesson = await Lesson.findById(req.params.id);
          const imageId = lesson.content4Sub1Image.public_id;
          await cloudinary.v2.uploader.destroy(imageId);
                                    
        } 
                                
                                
        if (req.body.contentSub2Image !== "") {
          let lesson = await Lesson.findById(req.params.id);
          const imageId = lesson.contentSub2Image.public_id;
          await cloudinary.v2.uploader.destroy(imageId);
                                        
        } 
        
        if (req.body.content2Sub2Image !== "") {
          let lesson = await Lesson.findById(req.params.id);
          const imageId = lesson.content2Sub2Image.public_id;
          await cloudinary.v2.uploader.destroy(imageId);
                                            
        }  
                                        
                                        
        if (req.body.content3Sub2Image !== "") {
          let lesson = await Lesson.findById(req.params.id);
          const imageId = lesson.content3Sub2Image.public_id;
          await cloudinary.v2.uploader.destroy(imageId);
                                                
        } 
                                            
        if (req.body.content4Sub2Image !== "") {
          let lesson = await Lesson.findById(req.params.id);
          const imageId = lesson.content4Sub2Image.public_id;
          await cloudinary.v2.uploader.destroy(imageId);
                                                    
        }        
                                                
                                                
        
        if (req.body.contentSub3Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.contentSub3Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
                                                        
        }    
                                                    
                                                    
        
        
        
        
        
        
        
        if (req.body.content2Sub3Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content2Sub3Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);                                                    
        } 
        
        
        
        if (req.body.content3Sub3Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content3Sub3Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
                                                                
    }   
        
        if (req.body.content4Sub3Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content4Sub3Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
        }   
        
        if (req.body.contentSub4Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.contentSub4Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }  
        
        
        if (req.body.content2Sub4Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content2Sub4Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }  
        
        if (req.body.content3Sub4Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content3Sub4Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }  
    if (req.body.content4Sub4Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content4Sub4Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }
        
                                                                            
        if (req.body.contentSub5Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.contentSub5Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }  
        
     
        
        if (req.body.content2Sub5Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content2Sub5Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
    }  
        
        if (req.body.content3Sub5Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content3Sub5Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);  
        }  
        
                                                                                        
        if (req.body.content4Sub5Image !== "") {
        let lesson = await Lesson.findById(req.params.id);
        const imageId = lesson.content4Sub5Image.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
                                                                                             }
        

    await lesson.deleteOne();


    res.status(200).json({
        success: true,
        message:"Lesson Deleted Successfully"
    })
})

// Get All Lessons  -- Filter
exports.getAllLessons = catchAsyncErrors(async (req,res,next) => {

    const lessonsCount = await Lesson.countDocuments();

    const resultPerPage = 12;
    
    const apifeatures = new ApiFeatures(Lesson.find(),req.query).pagination(resultPerPage);
    const lesson = await apifeatures.query;

    res.status(200).json({
        success: true,
        lessonsCount,
        resultPerPage,
        lesson
    })
});