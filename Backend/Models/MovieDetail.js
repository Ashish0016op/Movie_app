const mongoose = require('mongoose');

const MovieDetailSchema = new mongoose.Schema({
    ImageURL: {
        type: String,
    },
    Name: {
        type: String,
        required: true
    },
    Durations: {
        type: String,
        required:true
    },
    type: {
        type: String,
        required:true
    },
    Language: {
        type: [{
            type: String,
        }],
        default: []
    },
    Description: {
        type: String,
        required: true
    },
    ReleasedDate:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
    isReleased:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('MovieDetail', MovieDetailSchema);