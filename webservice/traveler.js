var mongoose = require('mongoose');
var schema = mongoose.Schema;

var travelerSchema = new schema({
    full_name: String,
    image: String,
    email: {type:String, index:1, required:true, unique:true},
    routes: [{
        start_date: String,
        end_date: String,
        start_pt: String,
        end_pt: String,
        direction: String,
        segments: [{
            index: String,
            seg_start: String,
            seg_end: String
        }]
    }]
}, {collection: 'travelers'});

var Traveler = mongoose.model('Traveler', travelerSchema);

module.exports = Traveler;
