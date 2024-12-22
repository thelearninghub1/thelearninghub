const mongoose = require("mongoose");


// Dashboard Model
const dashboardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Subject Name"]
    },
    youtube:{
        type:String,
        required:[true,"Please Enter Youtube Embed Link"]
    },
    activeTopic:{
        type:String,
        required:[true,"Please Enter Active Youtube Topic Name"]
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    downloadStandards:{
        type:String,
        required:[true,"Please Enter Download Standards Pdf Url"]
    },
    skill1Name:{
        type:String,
    },
    skill1Percentage:{
        type:Number,
    },
    skill2Name:{
        type:String,
    },
    skill2Percentage:{
        type:Number,
    },
    skill3Name:{
        type:String,
    },
    skill3Percentage:{
        type:Number,
    },
    skill4Name:{
        type:String,
    },
    skill4Percentage:{
        type:Number,
    },
    skill5Name:{
        type:String,
    },
    skill5Percentage:{
        type:Number,
    }
})

module.exports = mongoose.model("Dashboard",dashboardSchema)