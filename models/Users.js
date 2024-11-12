const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age must be at least 0'],
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
