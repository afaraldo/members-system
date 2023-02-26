const mongoose = require('mongoose');
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

module.exports.Project = mongoose.model('Project', ProjectSchema);