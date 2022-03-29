var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Disease = new Schema({
    diseaseId: {
        type: String,
        required: true
    },
    diseases: [{
        type: String
    }]
    
});

Disease.plugin(passportLocalMongoose);

module.exports = mongoose.model('Disease', Disease);