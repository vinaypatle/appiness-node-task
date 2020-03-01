const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/appiness-db';

module.exports = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log('Could not connect to database.');
    }
};