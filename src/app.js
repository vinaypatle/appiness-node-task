const path = require('path');
const express = require('express');

const connectDB = require('./db/mongoose');
const User = require('./models/user');
const UserRole = require('./models/user-roles');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        await connectDB();
        const existingUser = await User.findOne();

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const data = await user.save();
        
        const userRole = new UserRole({
            userId: data._id,
            userType: existingUser === null ? 'ADMIN' : 'GENERAL'
        });
        await userRole.save();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
});

module.exports = app;