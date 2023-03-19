const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Person } = require('../models/person.model');

var uniqueValidator = require('mongoose-unique-validator');

const DebtSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength: 3
    },
    state: { 
        type: String,
        default: 'Pendiente'
    },
    amount: { 
        type: Number,
        required: [
            true,
            "Price is required"
        ],
    },
    member: { type: Schema.Types.ObjectId, ref: 'Person' }
}, { timestamps: true });

DebtSchema.plugin(uniqueValidator);

module.exports.Debt = mongoose.model('Debt', DebtSchema);