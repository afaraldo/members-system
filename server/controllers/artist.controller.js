const { Artist } = require('../models/artist.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createArtist = (request, response) => {
    const { name } = request.body;
    Artist.create({
        name
    })
        .then(Artist => response.json(Artist))
        .catch(err => response.json(err));
}

module.exports.getAllArtists = (request, response) => {
    Artist.find({})
        .then(Artists => response.json(Artists))
        .catch(err => response.json(err))
}

module.exports.getArtist = (request, response) => {
    Artist.findOne({_id: request.params.id})
        .then(Artist => response.json(Artist))
        .catch(err => response.json(err))
}

module.exports.updateArtist = (request, response) => {
    Artist.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedArtist => response.json(updatedArtist))
        .catch(err => response.json(err))
}

module.exports.deleteArtist = (request, response) => {
    Artist.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}