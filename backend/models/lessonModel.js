const mongoose = require('mongoose');

// Lesson Models
const lessonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Lesson Name"]
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
    content1Name:{
        type:String,
    },
    content1Image:{
        public_id:{
            type:String,

        },
        url:{
            type:String,

        }
    },
    content2Name:{
        type:String,
    },
    content2Image:{
        public_id:{
            type:String,

        },
        url:{
            type:String,

        }
    },
    content3Name:{
        type:String,
    },
    content3Image:{
        public_id:{
            type:String,

        },
        url:{
            type:String,

        }
    },
    content4Name:{
        type:String,
    },
    content4Image:{
        public_id:{
            type:String,

        },
        url:{
            type:String,

        }
    },
    contentSub1Name:{
        type:String,
    },
    content2Sub1Name:{
        type:String,
    },
    content3Sub1Name:{
        type:String,
    },
    content4Sub1Name:{
        type:String,
    },
  
    contentSub1Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content2Sub1Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content3Sub1Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content4Sub1Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },


    contentSub2Name:{
        type:String,
    },
    content2Sub2Name:{
        type:String,
    },
    content3Sub2Name:{
        type:String,
    },
    content4Sub2Name:{
        type:String,
    },
    contentSub2Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content2Sub2Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content3Sub2Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content4Sub2Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    contentSub3Name:{
        type:String,
    },
    content2Sub3Name:{
        type:String,
    },
    content3Sub3Name:{
        type:String,
    },
    content4Sub3Name:{
        type:String,
    },
    contentSub3Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content2Sub3Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content3Sub3Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content4Sub3Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    contentSub4Name:{
        type:String,
    },
    content2Sub4Name:{
        type:String,
    },
    content3Sub4Name:{
        type:String,
    },
    content4Sub4Name:{
        type:String,
    },
    contentSub4Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content2Sub4Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content3Sub4Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content4Sub4Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    contentSub5Name:{
        type:String,
    },
    content2Sub5Name:{
        type:String,
    },
    content3Sub5Name:{
        type:String,
    },
    content4Sub5Name:{
        type:String,
    },
    contentSub5Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content2Sub5Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content3Sub5Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    content4Sub5Image:{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        }
    },
    contentSubFile:{
        type:String,
    },
    contentSubFile2:{
        type:String,
    },
    contentSubFile3:{
        type:String,
    },
    contentSubFile4:{
        type:String,
    },
    subContentTime:{
        type:String,
    },
    subContentTime2:{
        type:String,
    },
    subContentTime3:{
        type:String,
    },
    subContentTime4:{
        type:String,
    },
    SubContentanswerKey:{
        type:String,
    },
    SubContentanswerKey2:{
        type:String,
    },
    SubContentanswerKey3:{
        type:String,
    },
    SubContentanswerKey4:{
        type:String,
    },
    SubContentclassRoomLink:{
        type:String,
    },
    SubContentclassRoomLink2:{
        type:String,
    },
    SubContentclassRoomLink3:{
        type:String,
    },
    SubContentclassRoomLink4:{
        type:String,
    },
    SubContentStandard:{
        type:String
    },
    SubContentStandard2:{
        type:String
    },
    SubContentStandard3:{
        type:String
    },
    SubContentStandard4:{
        type:String
    },
    video1Name:{
        type:String,
    },
    video1Link:{
        type:String,
    },

    video2Name:{
        type:String,
    },
    video2Link:{
        type:String,
    },
   
    video3Name:{
        type:String,
    },
    video3Link:{
        type:String,
    },
  
    video4Name:{
        type:String,
    },
    video4Link:{
        type:String,
    },

    video5Name:{
        type:String,
    },
    video5Link:{
        type:String,
    },
   
    video6Name:{
        type:String,
    },
    video6Link:{
        type:String,
    },
 
    game1Name:{
        type:String,
    },
    game1Link:{
        type:String,
    },
 
    game2Name:{
        type:String,
    },
    game2Link:{
        type:String,
    },

    game3Name:{
        type:String,
    },
    game3Link:{
        type:String,
    },
  
    game4Name:{
        type:String,
    },
    game4Link:{
        type:String,
    },

  
  
  
  
   

})

module.exports = mongoose.model("Lesson",lessonSchema);