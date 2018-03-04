var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator');

var schema = mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    messages :[{type : mongoose.Schema.Types.ObjectId , ref : 'message'}]
});

//allow to use the unique validator
schema.plugin(validator);

module.exports = mongoose.model('user',schema);