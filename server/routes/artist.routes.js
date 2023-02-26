const ArtistController = require('../controllers/artist.controller');
module.exports = function(app){
    app.get('/api', ArtistController.index);
    app.post('/api/artists', ArtistController.createArtist);
    app.get('/api/artists', ArtistController.getAllArtists);
    app.get('/api/artists/:id', ArtistController.getArtist);
    app.put('/api/artists/:id', ArtistController.updateArtist);
    app.delete('/api/artists/:id', ArtistController.deleteArtist);
}