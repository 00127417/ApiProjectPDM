const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Item = new Schema({
    number: Number,
    sound: String,
    level: Number
})

module.exports = mongoose.model('item', Item)