const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [
            true,
            "FirstName is required"
        ],
        minlength: 3
    },
    lastName: { 
        type: String,
        required: [
            true,
            "LastName is required"
        ],
    },
    document: {
        type: String,
        required: [
            true,
            "LastName is required"
        ],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [
            true,
            "PhoneNumber is required"
        ],
        unique: true
    }
}, { timestamps: true });
PersonSchema.plugin(uniqueValidator);

module.exports.Person = mongoose.model('Person', PersonSchema);