const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Item = new Schema({
    number: Number,
    name: String,
    sound: String,
    level: Number
})

module.exports = mongoose.model('item', Item)