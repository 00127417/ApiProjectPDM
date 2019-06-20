const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Patient = new Schema({
    name: {type: String, required: true},
    date: {type: String, required: true},
    level: {type: Number, required: true},
    items: [{number: Number, success: Number}]
});

module.exports = mongoose.model('patient', Patient)