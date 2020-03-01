const mongoose = require('mongoose');

module.exports = mongoose.model('UserRole', new mongoose.Schema({
    userId: mongoose.Schema.ObjectId,
    userType: String
}, {
    timestamps: true
}));