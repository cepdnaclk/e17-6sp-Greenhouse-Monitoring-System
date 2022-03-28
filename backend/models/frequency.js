var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Frequency = new Schema({
    time: {
        type: Number,
        default: 60 // in minutes
    } 
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Frequency', Frequency);