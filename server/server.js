const express = require('express');
const cors = require('cors') 
const cookieParser = require('cookie-parser');
const app = express();
require('./config/mongoose.config'); // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
// middleware que agregar cookies a la solicitud
app.use(cookieParser())
// CORS 
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

require('./routes/person.routes')(app); // This is new
require('./routes/debt.routes')(app); // This is new
require('./routes/user.routes')(app); // This is new

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});
