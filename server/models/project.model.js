const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const ProjectSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: 3,
        unique: true
    },
    dueDate: { 
        type: Date,
        required: [
            true,
            "Due Date is required"
        ],
    },
    status: {
        type: String,
        default: "new"
    }
}, { timestamps: true });
ProjectSchema.plugin(uniqueValidator);

module.exports.Project = mongoose.model('Project', ProjectSchema);