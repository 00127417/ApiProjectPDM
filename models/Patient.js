const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    progress = require('../models/Progress');

let Patient = new Schema({
    name: {type: String, required: true},
    date: {type: String, required: true},
    level: {type: Number, required: true},
    progress: progress.schema
});

module.exports = mongoose.model('patient', Patient)