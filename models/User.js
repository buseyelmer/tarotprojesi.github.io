// models/User.js
const mongoose = require('mongoose');

// Kullanıcı şeması tanımla
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: 'user' // Admin ya da kullanıcı rolü
    }
});

// Kullanıcı modelini oluştur
const User = mongoose.model('User', userSchema);

module.exports = User;
