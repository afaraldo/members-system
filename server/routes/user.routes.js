const UserController = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config')

module.exports = (app) =>{
    app.post('/api/users/signup', UserController.signup)
    app.post('/api/users/login', UserController.login) 
    app.post('/api/users/logout', authenticate, UserController.logout)
    //app.get("/api/users/:id", authenticate, UserController.findOneUser);
    app.put("/api/users/:id/edit", authenticate, UserController.updateUser);
}