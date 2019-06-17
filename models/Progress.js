const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let Progress = new Schema({
    name: String,
    items: [{
        sound: {
            Type: String
        },
        level: {
            Type: Number
        },
        success: {
            Type: Number
        }
    }, {
        sound: {
            Type: String
        },
        level: {
            Type: Number
        },
        success: {
            Type: Number
        }
    }]
})

module.exports = mongoose.model('progress', Progress)