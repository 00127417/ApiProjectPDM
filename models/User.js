const mongoose = require('mongoose'),
    Schema = mongoose.Schema
    patient = require('../models/Patient');

let User = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: Number, required: true},
    patients: [patient.schema]

})
module.exports = mongoose.model('user', User)