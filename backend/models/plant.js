var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Plant = new Schema({
    plantID: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    diseases: [{
        type: String
    }],
    totalYield: {
        type: Number,
        default: 0
    },
    yieldToBeHarvested: {
        type: Number,
        default: 0
    }
});

Plant.plugin(passportLocalMongoose);

module.exports = mongoose.model('Plant', Plant);