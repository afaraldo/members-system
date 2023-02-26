const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/artist.routes')(app); // This is new

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
