const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Patient = new Schema({
    name: String,
    date: Date,
    level: Number
});

let User = new Schema({
    username: String,
    password: String,
    type: Number,
    patients: [Patient]

})

module.exports = mongoose.model('user', User)