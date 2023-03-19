const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [3, 'Password must be 8 characters or longer']
    }
}, { timestamps: true });

//middleware
UserSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()
    } catch {
        console.log('Failed to save user', error)
    }
})

module.exports = mongoose.model('User', UserSchema)