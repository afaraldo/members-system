const mongoose = require('mongoose');
const ArtistSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength: 3
    }
}, { timestamps: true });

module.exports.Artist = mongoose.model('Artist', ArtistSchema);