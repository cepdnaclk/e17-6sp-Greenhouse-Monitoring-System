var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    contactNumber: {
        type: String,
        default: ''
    }
    
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);