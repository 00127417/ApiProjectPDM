const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Question = new Schema({
    number: Number,
    sound: String,
    level: Number,
    answer: String,
    optiona: String,
    optionb: String,
    opctionc: String
})

module.exports = mongoose.model('question', Question)