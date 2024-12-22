const mongoose = require('mongoose');

const highlightsSchema = new mongoose.Schema({
  
    description:{
        type:String,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
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
    images:[
        {
            public_id:{
                type:String,
            },
            url:{
                type:String,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
});


module.exports = mongoose.model('Highlight', highlightsSchema);