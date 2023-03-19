const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const EXPIRATION_TIME = 600000
const SECRET = process.env.SECRET_KEY

module.exports = {
    
    getUser: (request, response) => {
        User.findOne({ _id: request.params.id })
            .then(user => response.json({ user: user }))
            .catch(err => response.status(404).json(err));
    },

    updateUser : (request, response)=>{
        User.findByIdAndUpdate(
            request.params.id,
            request.body, {new:true}
        ).then(user => response.json({ user: user }))
        .catch(err => response.status(400).json(err));
    },

    signup: (request, response) => {
        try {
            const newUser = User.create(request.body)
            console.log()
            response.status(201)
                .json({ message: 'Registered user', user: newUser })
            console.log({ message: 'Registered user', user: newUser })
        } catch (error) {
            console.log(error)
            response.status(401).json(error)
        }
    },

    login: (request, response) => {
        User.findOne({ email: request.body.email }).then(user => {
            bcrypt
                .compare(request.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid) {
                        const userToken = jwt.sign({_id: user._id, username: user.name}, SECRET)
                        response.status(201)
                            .cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + EXPIRATION_TIME) })
                            .cookie('user', user)
                            .json({ msg: "success!", user: user })
                        console.log({message: 'User login', user: user})
                    }
                })
                .catch(err => {
                    response.status(404).json({ message: "invalid login attempt" })
                    console.log(err);
                });
        })
        .catch(err => {
            response.status(404).json({ message: "Invalid Email or Password" });
            console.log({ message: "Invalid Email or Password" })
        })
    },

    logout: (request, response) => {
        console.log(request.user)
        response.clearCookie('userToken')
        response.clearCookie('user')
        response.json({ success: 'User logged out' })
    }
}