var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Plant = new Schema({
    plantID: {
        type: String,
        required: true
    },
    diseases: [{
        type: String
    }],
    totalYield: {
        type: Number
    },
    yieldToBeHarvested: {
        type: Number
    }
});

Plant.plugin(passportLocalMongoose);

module.exports = mongoose.model('Plant', Plant);